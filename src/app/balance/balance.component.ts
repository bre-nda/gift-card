import { Component, OnInit } from '@angular/core';
import { Balance } from './balance';
import { RestBalanceService } from './rest-balance.service';

@Component({
  selector: 'app-balance',
  templateUrl: './balance.component.html',
  styleUrls: ['./balance.component.css']
})
export class BalanceComponent implements OnInit {

  bal: Balance[] = [];
  p: number = 1;
  RecipientNumber:any;
  constructor(public rs: RestBalanceService) { }

  ngOnInit(): void {
    this.rs.getBalance().subscribe((response) => {
      this.bal = response;
     });
  }

  Search(){
    if(this.RecipientNumber == ''){
      this.ngOnInit();
    }else{
      this.bal = this.bal.filter(res =>{
        return res.RecipientNumber.toLocaleLowerCase().match(this.RecipientNumber.toLocaleLowerCase())
      })
    };
  };

}
