import { Component, OnInit } from '@angular/core';
import share from './file/share.json';

@Component({
  selector: 'app-share',
  templateUrl: './share.component.html',
  styleUrls: ['./share.component.css']
})
export class ShareComponent implements OnInit {

  
  p: number = 1;
  User_Mobile: any;

  sharing:{
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
  }[]=share;

  constructor() { }

  ngOnInit(): void {
  }

  Search(){
    if(this.User_Mobile == ''){
      this.ngOnInit();
    }else{
      this.sharing = this.sharing.filter(res =>{
        return res.User_Mobile.toLocaleLowerCase().match(this.User_Mobile.toLocaleLowerCase())
      })
    };
  };

}
