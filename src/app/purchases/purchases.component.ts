import { Component, OnInit } from '@angular/core';
import { Purchases } from './purchases';
import { RestPurchasesService } from './rest-purchases.service';

@Component({
  selector: 'app-purchases',
  templateUrl: './purchases.component.html',
  styleUrls: ['./purchases.component.css']
})
export class PurchasesComponent implements OnInit {
  buy: Purchases[] = [];
  p: number = 1;
  Acc_Mobile:any;
  constructor(public rs:RestPurchasesService) { }

  ngOnInit(): void {
    this.rs.getPurchases().subscribe((response) => {
      this.buy = response;
     });
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
