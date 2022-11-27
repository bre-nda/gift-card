import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  size : any;
  sess: any;
  use: any;
  buy: any;
  redeem: any;
  bal: any;
  sharing: any;
  diffDay: any;


  constructor(private apiservice:ApiService) { }
  
  ngOnInit(): void {
    this.getAvailableSession();
    this.getAllData();
    this.getAvailablePurchase();
    this.getAvailableRedeem();
    this.getAvailableBalance();
    this.getAvailableShare();
  }

  getAvailableSession(){
    this.apiservice.getAllSessions().subscribe((res)=>{
      this.sess = res.data;
    });
  }

  getAllData(){
    this.apiservice.getAllUsers().subscribe((res)=>{
      this.use = res.data;
    });
  }
  getAvailablePurchase(){
    this.apiservice.getAllPurchases().subscribe((res)=>{
      this.buy = res.data;
    });
  }
  getAvailableRedeem(){
    this.apiservice.getAllRedemptions().subscribe((res)=>{
      this.redeem = res.data;
    });
  }
  getAvailableBalance(){
    this.apiservice.getAllBalance().subscribe((res)=>{
      this.bal = res.data;
    });
  }
  getAvailableShare(){
    this.apiservice.getAllShares().subscribe((res)=>{
      this.sharing = res.data;
    });
  }

  calculateDiff(buyDate: { ProductDateCreated: string | number | Date; }){
    console.log(buyDate.ProductDateCreated)
    let start = new Date().getTime()
    let end = new Date(buyDate.ProductDateCreated).getTime()
    let time = start - end
    let diffDay = Math.floor(time / 86400000); //day calculate
    let diffHour = Math.floor((time % 86400000) / 3600000 ); //hour calculate
    let diffMinute = Math.floor(((time % 86400000) % 3600000) / 60000);  //minute calculate

    console.log('day' ,diffDay)
    console.log('hour' ,diffHour)
    console.log('minute' ,diffMinute)


    if (diffDay >=1){
      return diffDay
    }else {
      return diffHour
    }
  }

}
