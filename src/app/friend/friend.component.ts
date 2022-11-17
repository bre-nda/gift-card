import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import friend from './file/friend.json'

@Component({
  selector: 'app-friend',
  templateUrl: './friend.component.html',
  styleUrls: ['./friend.component.css']
})
export class FriendComponent implements OnInit {

  
  p: number = 1;
  User_Mobile: any;
  refer: any;


  
  constructor(private apiservice: ApiService) { }

  ngOnInit(): void {
    this.getAvailableShare();
  }

  getAvailableShare(){
    this.apiservice.getAllShares().subscribe((res)=>{
      this.refer = res.data;
    });
  }

  Search(){
    if(this.User_Mobile == ''){
      this.ngOnInit();
    }else{
      this.refer = this.refer.filter((res: { User_Mobile: string; }) =>{
        return res.User_Mobile.toLocaleLowerCase().match(this.User_Mobile.toLocaleLowerCase())
      })
    };
  };

}
