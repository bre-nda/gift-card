import { Component, OnInit } from '@angular/core';
import { RestWalletService } from './rest-wallet.service';
import { Wallet } from './wallet';

@Component({
  selector: 'app-wallets',
  templateUrl: './wallets.component.html',
  styleUrls: ['./wallets.component.css']
})
export class WalletsComponent implements OnInit {
  
  walletts:Wallet[] = [];
  p: number = 1;
  Beneficiary_Mobile:any;
  constructor(public rs:RestWalletService) { }

  ngOnInit(): void {
    this.rs.getWallet().subscribe((response) => {
      this.walletts = response;
     });
  }

  Search(){
    if(this.Beneficiary_Mobile == ''){
      this.ngOnInit();
    }else{
      this.walletts = this.walletts.filter(res =>{
        return res.Beneficiary_Mobile.toLocaleLowerCase().match(this.Beneficiary_Mobile.toLocaleLowerCase())
      })
    };
  };

}
