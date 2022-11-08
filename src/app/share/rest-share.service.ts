import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Share } from './share';

@Injectable({
  providedIn: 'root'
})
export class RestShareService {

  constructor(private http:HttpClient) { }

  url:string = " http://localhost:3000/gifts";

  getGift(){
    return this.http.get<Share[]>(this.url);
  }
}
