import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';


@Component({
  selector: 'app-balance',
  templateUrl: './balance.component.html',
  styleUrls: ['./balance.component.css']
})
export class BalanceComponent implements OnInit {

  
  p: number = 1;
  bal: any;
  RecipientNumber!: string;
  
  


  constructor(private apiservice: ApiService) { }

  ngOnInit(): void {
    this.getAvailableBalance();
  }

  getAvailableBalance(){
    this.apiservice.getAllBalance().subscribe((res)=>{
      this.bal = res.data;
    });
  }

  Search(){
    if(this.RecipientNumber == ''){
      this.ngOnInit();
    }else{
      this.bal = this.bal.filter((res: { RecipientNumber: string; }) =>{
        return res.RecipientNumber.toLocaleLowerCase().match(this.RecipientNumber.toLocaleLowerCase())
      })
    };
  };

  
}
