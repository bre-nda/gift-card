import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import redemption from './file/redemption.json'

@Component({
  selector: 'app-redemption',
  templateUrl: './redemption.component.html',
  styleUrls: ['./redemption.component.css']
})
export class RedemptionComponent implements OnInit {

 
  p: number = 1;
  Redeem_Mobile: any;
  redeem: any;

  
  constructor(private apiservice:ApiService) { }

  ngOnInit(): void {
    this.getAvailableRedeem();
  }

  getAvailableRedeem(){
    this.apiservice.getAllRedemptions().subscribe((res)=>{
      this.redeem = res.data;
    });
  }

  Search(){
    if(this.Redeem_Mobile == ''){
      this.ngOnInit();
    }else{
      this.redeem = this.redeem.filter((res: { Redeem_Mobile: string; }) =>{
        return res.Redeem_Mobile.toLocaleLowerCase().match(this.Redeem_Mobile.toLocaleLowerCase())
      })
    };
  };

}
