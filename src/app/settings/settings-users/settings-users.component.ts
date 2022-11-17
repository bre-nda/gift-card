import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import users from './file/users.json'

@Component({
  selector: 'app-settings-users',
  templateUrl: './settings-users.component.html',
  styleUrls: ['./settings-users.component.css']
})
export class SettingsUsersComponent implements OnInit {
  
  p: number = 1;
  User_Mobile:any;
  use:any;
  getAllUsers: any;
  

  

  constructor(private apiservice: ApiService, private router:Router) { }

  ngOnInit(): void {
    this.getAllData();
  }

  getAllData(){
    this.apiservice.getAllUsers().subscribe((res)=>{
      this.use = res.data;
    });
  }

  userDetails(id:number){
    this.router.navigate(['details', id]);
  }
  
  editDetails(id:number){
    this.router.navigate(['edit', id]);
  }

  removeUser(id: number){
    this.apiservice.deleteUser(id).subscribe((res)=>{
      // after delete get rest data
      this.getAllUsers();
    })
  }
  



  Search(){
    if(this.User_Mobile == ''){
      this.ngOnInit();
    }else{
      this.use = this.use.filter((res: { User_Mobile: string; }) =>{
        return res.User_Mobile.toLocaleLowerCase().match(this.User_Mobile.toLocaleLowerCase())
      })
    };
  };

}
