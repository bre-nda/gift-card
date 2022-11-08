import { Component } from '@angular/core';
import { AuthenticationService } from './service/authentication/authentication.service';

interface SideNavToggle{
  screenWidth:number;
  collapsed: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'giftcard';

  isSideNavCollapsed = false;
  screenWidth = 0;


  onToggleSideNav(data: SideNavToggle): void{
    this.screenWidth = data.screenWidth;
    this.isSideNavCollapsed = data.collapsed;
  }

  constructor(public authenticationService: AuthenticationService){

  }

  logout(){
    this.authenticationService.logout();
  }
}
