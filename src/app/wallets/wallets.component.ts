import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import wallet from './file/wallet.json'

@Component({
  selector: 'app-wallets',
  templateUrl: './wallets.component.html',
  styleUrls: ['./wallets.component.css']
})
export class WalletsComponent implements OnInit {
  
  
  p: number = 1;
  User_Mobile:any;
  walletts: any;

  

  constructor(private apiservice:ApiService) { }
  
  ngOnInit(): void {
    this.getAvailableWallet();
  }

  getAvailableWallet(){
    this.apiservice.getAllWallets().subscribe((res)=>{
      this.walletts = res.data;
    });
  }

  Search(){
    if(this.User_Mobile == ''){
      this.ngOnInit();
    }else{
      this.walletts = this.walletts.filter((res: { User_Mobile: string; }) =>{
        return res.User_Mobile.toLocaleLowerCase().match(this.User_Mobile.toLocaleLowerCase())
      })
    };
  };

}
