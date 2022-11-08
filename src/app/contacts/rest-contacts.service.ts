import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Contacts } from './contacts';

@Injectable({
  providedIn: 'root'
})
export class RestContactsService {

  constructor(private http:HttpClient) { }

  url:string = " http://localhost:3000/gifts";

  getContacts(){
    return this.http.get<Contacts[]>(this.url);
  }
}
