import { Component, OnInit } from '@angular/core';
import redemption from './file/redemption.json'

@Component({
  selector: 'app-redemption',
  templateUrl: './redemption.component.html',
  styleUrls: ['./redemption.component.css']
})
export class RedemptionComponent implements OnInit {

 
  p: number = 1;
  Redeem_Mobile: any;

  redeem:{
    id: string,
    Redeem_Mobile: string,
    Redeem_Merchant_ID: string,
    Editing_Field: string,
    Redeem_Mpesa_Code: string,
    Redeem_Code: string,
    Redeem_Account_No: string,
    Redeem_Amount: string,
    Redeem_Trans_Charge: string,
    Redeem_Type: string,
    Redeem_Date: string,
    Redeem_Status: string,
  }[]=redemption;

  constructor() { }

  ngOnInit(): void {
    
  }

  Search(){
    if(this.Redeem_Mobile == ''){
      this.ngOnInit();
    }else{
      this.redeem = this.redeem.filter(res =>{
        return res.Redeem_Mobile.toLocaleLowerCase().match(this.Redeem_Mobile.toLocaleLowerCase())
      })
    };
  };

}
