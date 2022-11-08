import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Sessions } from './sessions';

@Injectable({
  providedIn: 'root'
})
export class RestSessionsService {

  constructor(private http:HttpClient) { }

  url:string = " http://localhost:3000/sessions";

  getSessions(){
    return this.http.get<Sessions[]>(this.url);
  }
}
