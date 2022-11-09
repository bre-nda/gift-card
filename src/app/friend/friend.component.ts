import { Component, OnInit } from '@angular/core';
import friend from './file/friend.json'

@Component({
  selector: 'app-friend',
  templateUrl: './friend.component.html',
  styleUrls: ['./friend.component.css']
})
export class FriendComponent implements OnInit {

  
  p: number = 1;
  User_Mobile: any;


  refer:{
    id: string,
    Sender_Name: string,
    User_Name: string,
    Beneficiary_Special_Text: string,
    Beneficiary_Mobile: string,
    Editing_Field: string,
    Mpesa_Code: string,
    Gift_Code: string,
    User_Mobile: string,
    Gift_Amount: string,
    Trans_Date: string,
    Gift_Type: string,
    Status: string,
  }[]=friend;

  constructor() { }

  ngOnInit(): void {
  }

  Search(){
    if(this.User_Mobile == ''){
      this.ngOnInit();
    }else{
      this.refer = this.refer.filter(res =>{
        return res.User_Mobile.toLocaleLowerCase().match(this.User_Mobile.toLocaleLowerCase())
      })
    };
  };

}
