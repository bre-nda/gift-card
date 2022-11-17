import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import session from './file/session.json'

@Component({
  selector: 'app-sessions',
  templateUrl: './sessions.component.html',
  styleUrls: ['./sessions.component.css']
})
export class SessionsComponent implements OnInit {

  
  p: number = 1;
  phone_no!:string;
  sess: any;

  constructor(private apiservice:ApiService) { }
  
  ngOnInit(): void {
    this.getAvailableSession();
  }

  getAvailableSession(){
    this.apiservice.getAllSessions().subscribe((res)=>{
      this.sess = res.data;
    });
  }


  Search(){
    if(this.phone_no == ''){
      this.ngOnInit();
    }else{
      this.sess = this.sess.filter((res: { phone_no: string; }) =>{
        return res.phone_no.toLocaleLowerCase().match(this.phone_no.toLocaleLowerCase())
      })
    };
  };
}
