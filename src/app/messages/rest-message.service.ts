import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Message } from './message';

@Injectable({
  providedIn: 'root'
})
export class RestMessageService {

  constructor(private http:HttpClient) { }

  url:string = " http://localhost:3000/outgoing_msg";

  getMessage(){
    return this.http.get<Message[]>(this.url);
  }
}
