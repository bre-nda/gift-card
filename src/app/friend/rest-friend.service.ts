import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Friend } from './friend';

@Injectable({
  providedIn: 'root'
})
export class RestFriendService {

  constructor(private http:HttpClient) { }

  url:string = " http://localhost:3000/gifts";

  getGift(){
    return this.http.get<Friend[]>(this.url);
  }
}
