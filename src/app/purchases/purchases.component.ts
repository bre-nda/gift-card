import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import purchases from './file/purchases.json'

@Component({
  selector: 'app-purchases',
  templateUrl: './purchases.component.html',
  styleUrls: ['./purchases.component.css']
})
export class PurchasesComponent implements OnInit {
  
  p: number = 1;
  buy:any;
  Acc_Mobile!: string;
  

  constructor(private apiservice:ApiService) { }

  ngOnInit(): void {
    this.getAvailablePurchase();
  }

  getAvailablePurchase(){
    this.apiservice.getAllPurchases().subscribe((res)=>{
      this.buy = res.data;
    });
  }
 

  Search(){
    if(this.Acc_Mobile == ''){
      this.ngOnInit();
    }else{
      this.buy = this.buy.filter((res: { Acc_Mobile: string; }) =>{
        return res.Acc_Mobile.toLocaleLowerCase().match(this.Acc_Mobile.toLocaleLowerCase())
      })
    };
  };

}
