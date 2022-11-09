import { Component, OnInit } from '@angular/core';
import  bal  from './file/bal.json'

@Component({
  selector: 'app-balance',
  templateUrl: './balance.component.html',
  styleUrls: ['./balance.component.css']
})
export class BalanceComponent implements OnInit {

  
  p: number = 1;
  RecipientNumber:any;

  balances:{
    RecipientNumber: string,
    Balance: string,}[]=bal;

  constructor() { }

  ngOnInit(): void {
    
  }

  Search(){
    if(this.RecipientNumber == ''){
      this.ngOnInit();
    }else{
      this.balances = this.balances.filter(res =>{
        return res.RecipientNumber.toLocaleLowerCase().match(this.RecipientNumber.toLocaleLowerCase())
      })
    };
  };

  
}
