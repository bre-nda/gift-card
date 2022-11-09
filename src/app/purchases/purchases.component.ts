import { Component, OnInit } from '@angular/core';
import purchases from './file/purchases.json'

@Component({
  selector: 'app-purchases',
  templateUrl: './purchases.component.html',
  styleUrls: ['./purchases.component.css']
})
export class PurchasesComponent implements OnInit {
  
  p: number = 1;
  Acc_Mobile:any;

  buy:{
    id: string, Acc_Mpesa_Code: string, Acc_Channel:string, Acc_Redeem_Code: string,Acc_Deposit_Type: string, Acc_Mobile: string,Acc_TransDate:string, Acc_Amount:string, Acc_Type:string, Acc_Trans_Charge: string
  }[]=purchases;

  constructor() { }

  ngOnInit(): void {
  }

  Search(){
    if(this.Acc_Mobile == ''){
      this.ngOnInit();
    }else{
      this.buy = this.buy.filter(res =>{
        return res.Acc_Mobile.toLocaleLowerCase().match(this.Acc_Mobile.toLocaleLowerCase())
      })
    };
  };

}
