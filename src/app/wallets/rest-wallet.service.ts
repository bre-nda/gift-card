import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Wallet } from './wallet';

@Injectable({
  providedIn: 'root'
})
export class RestWalletService {

  constructor(private http:HttpClient) { }

  url:string = " http://localhost:3000/gifts";

  getWallet(){
    return this.http.get<Wallet[]>(this.url);
  }
}
