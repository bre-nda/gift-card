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
  redUrl = 'http://localhost:3000/gift_redemptions';
  buyUrl = 'http://localhost:3000/gift_accounts';
  messUrl = 'http://localhost:3000/outgoing_msg';
  usersUrl = 'http://localhost:3000/users';
  sessUrl = 'http://localhost:3000/sessions';


  // Get all Wallet_Balances Data

  getAllBalance():Observable<any>{
    return this._http.get(`${this.apiUrl}`);
  }
  getAllContacts():Observable<any>{
    return this._http.get(`${this.contUrl}`);
  }
  getAllRedemptions():Observable<any>{
    return this._http.get(`${this.redUrl}`);
  }
  getAllPurchases():Observable<any>{
    return this._http.get(`${this.buyUrl}`);
  }
  getAllMessages():Observable<any>{
    return this._http.get(`${this.messUrl}`);
  }
  getAllUsers():Observable<any>{
    return this._http.get(`${this.usersUrl}`);
  }
  getAllSessions():Observable<any>{
    return this._http.get(`${this.sessUrl}`);
  }
  getAllShares():Observable<any>{
    return this._http.get(`${this.contUrl}`);
  }
  getAllWallets():Observable<any>{
    return this._http.get(`${this.contUrl}`);
  }
  getSingleUser(id:number):Observable<any>{
    return this._http.get(`${this.usersUrl}/${id}`);
  }
  createNewUser(data:any):Observable<any>{
    return this._http.post(`${this.usersUrl}`, data);
  }
  editUser(id:number, value:any):Observable<Object>{
    return this._http.put(`${this.usersUrl}/${id}`, value);
  }

  deleteUser(id:number):Observable<any>{
    return this._http.delete(`${this.usersUrl}/${id}`);
  }

}
