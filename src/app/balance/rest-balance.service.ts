import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Balance } from './balance';

@Injectable({
  providedIn: 'root'
})
export class RestBalanceService {

  constructor(private http:HttpClient) { }

  url:string = " http://localhost:3000/Wallet_Balances";

  getBalance(){
    return this.http.get<Balance[]>(this.url);
  }
}
