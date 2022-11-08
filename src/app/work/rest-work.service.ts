import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Work } from './work';

@Injectable({
  providedIn: 'root'
})
export class RestWorkService {

  constructor(private http:HttpClient) { }

  url:string = " http://localhost:3000/gifts";

  getGift(){
    return this.http.get<Work[]>(this.url);
  }
}
