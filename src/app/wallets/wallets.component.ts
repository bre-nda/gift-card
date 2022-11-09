import { Component, OnInit } from '@angular/core';
import wallet from './file/wallet.json'

@Component({
  selector: 'app-wallets',
  templateUrl: './wallets.component.html',
  styleUrls: ['./wallets.component.css']
})
export class WalletsComponent implements OnInit {
  
  
  p: number = 1;
  User_Mobile:any;

  walletts:{
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
  }[]=wallet;

  
  constructor() { }

  ngOnInit(): void {
  }

  Search(){
    if(this.User_Mobile == ''){
      this.ngOnInit();
    }else{
      this.walletts = this.walletts.filter(res =>{
        return res.User_Mobile.toLocaleLowerCase().match(this.User_Mobile.toLocaleLowerCase())
      })
    };
  };

}
