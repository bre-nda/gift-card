import { style, transition, trigger,animate, keyframes, } from '@angular/animations';
import { Component, OnInit, Output, EventEmitter, HostListener } from '@angular/core';
import { AuthenticationService } from '../service/authentication/authentication.service';
import { INavbarData } from './helper';
import { navbarData } from './nav-data';

interface SideNavToggle{
  screenWidth:number;
  collapsed: boolean;
}

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css'],
  animations: [
    trigger('fadeInOut',[
      transition(':enter',[
        style({opacity: 0}),
        animate('350ms',
          style({opacity: 1})
        )
      ]),
      transition(':leave',[
        style({opacity: 0}),
        animate('350ms',
          style({opacity: 0})
        )
      ])
    ]),
    // trigger('rotate',[
    //   transition(':enter', [
    //     animate('1000ms',
    //       keyframes({
    //         style({transform: 'rotate(0deg)', offset: '0'}),
    //         style({transform: 'rotate(2turn)', offset: '1'})
    //     })
    //   )
    //   ])
       
    // ])
  ]
})
export class SidenavComponent implements OnInit {
  
  @Output() onToggleSideNav: EventEmitter<SideNavToggle> = new EventEmitter();
  collapsed = false;
  screenWidth = 0;
  navData = navbarData;
  multiple: boolean = false;


  toggleCollapse(): void{
    this.collapsed = !this.collapsed;
    this.onToggleSideNav.emit({collapsed: this.collapsed, screenWidth: this.screenWidth});
  }
  closeSidenav(): void{
    this.collapsed = false;
    this.onToggleSideNav.emit({collapsed: this.collapsed, screenWidth: this.screenWidth});
  }

  // constructor() { }
  constructor(public authenticationService: AuthenticationService){

  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any){
    this.screenWidth = window.innerWidth;
    if(this.screenWidth <=768){
      this.collapsed = false;
      this.onToggleSideNav.emit({collapsed: this.collapsed, screenWidth: this.screenWidth});
    }
  }

  // constructor(public router: Router ){}

  ngOnInit(): void {
    this.screenWidth = window.innerWidth;
  }

  handleClick(item: INavbarData): void{
    if(!this.multiple){
      for(let modelItem of this.navData){
        if(item !== modelItem && modelItem.expanded){
          modelItem.expanded = false;
        }
      }
    }
    item.expanded = !item.expanded
  }

}
