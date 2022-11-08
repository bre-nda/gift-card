import { Component, OnInit } from '@angular/core';
import { Redemption } from './redemption';
import { RestRedemptionService } from './rest-redemption.service';

@Component({
  selector: 'app-redemption',
  templateUrl: './redemption.component.html',
  styleUrls: ['./redemption.component.css']
})
export class RedemptionComponent implements OnInit {

  redemption: Redemption[] = [];
  p: number = 1;
  Redeem_Mobile: any;

  constructor(public rs:RestRedemptionService) { }

  ngOnInit(): void {
    this.rs.getRedemption().subscribe((response) => {
      this.redemption = response;
     });
  }

  Search(){
    if(this.Redeem_Mobile == ''){
      this.ngOnInit();
    }else{
      this.redemption = this.redemption.filter(res =>{
        return res.Redeem_Mobile.toLocaleLowerCase().match(this.Redeem_Mobile.toLocaleLowerCase())
      })
    };
  };

}
