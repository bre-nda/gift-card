import { Component, OnInit, Input, HostListener } from '@angular/core';
import { AuthenticationService } from '../service/authentication/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {



  @Input() collapsed = false;
  @Input() screenWidth = 0;

  canShowSearchOverlay = false;


  // constructor() { }
  constructor(public authenticationService: AuthenticationService){

  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any){
    this.checkCanShowSearchOverlay(window.innerHeight); 
  }

  ngOnInit(): void {
    this.checkCanShowSearchOverlay(window.innerHeight);
  }


  getHeadClass(): string{
    let styleClass = '';
    if(this.collapsed && this.screenWidth > 768){
     styleClass = 'head-trimmed'; 
    } else{
      styleClass = 'head-md-screen';
    }
    return styleClass;
  }

  checkCanShowSearchOverlay(innerWidth: number): void {
    if(innerWidth < 845){
      this.canShowSearchOverlay = true;
    }else{
      this.canShowSearchOverlay = false;
    }
  }
     
  logout(){
    this.authenticationService.logout();
  }
}
