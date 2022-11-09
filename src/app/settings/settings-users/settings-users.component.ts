import { Component, OnInit } from '@angular/core';
import users from './file/users.json'

@Component({
  selector: 'app-settings-users',
  templateUrl: './settings-users.component.html',
  styleUrls: ['./settings-users.component.css']
})
export class SettingsUsersComponent implements OnInit {
  
  p: number = 1;
  User_Mobile:any;

  use:{
    id: string,
    User_Mobile: string,
    User_Name: string,
    User_Reg_Date: string,
  }[]=users;

  constructor() { }

  ngOnInit(): void {
  }

  Search(){
    if(this.User_Mobile == ''){
      this.ngOnInit();
    }else{
      this.use = this.use.filter(res =>{
        return res.User_Mobile.toLocaleLowerCase().match(this.User_Mobile.toLocaleLowerCase())
      })
    };
  };

}
