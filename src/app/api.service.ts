import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private _http: HttpClient) { }
  apiUrl = 'http://localhost:3000/Wallet_Balances';
  contUrl = 'http://localhost:3000/gifts';


  // Get all Wallet_Balances Data
  getAllBalance():Observable<any>{
    return this._http.get(`${this.apiUrl}`);
  }
  getAllContacts():Observable<any>{
    return this._http.get(`${this.contUrl}`);
  }
}
