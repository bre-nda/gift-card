import { Component, OnInit } from '@angular/core';
import session from './file/session.json'

@Component({
  selector: 'app-sessions',
  templateUrl: './sessions.component.html',
  styleUrls: ['./sessions.component.css']
})
export class SessionsComponent implements OnInit {

  
  p: number = 1;
  phone_no:any;

  sess:{
    id_auto: string,
        id: string,
        phone_no: string,
        ss_id: string,
        screen_id: string,
        Screen_description: string,
  }[]=session;

  constructor() { }

  ngOnInit(): void {
  }

  Search(){
    if(this.phone_no == ''){
      this.ngOnInit();
    }else{
      this.sess = this.sess.filter(res =>{
        return res.phone_no.toLocaleLowerCase().match(this.phone_no.toLocaleLowerCase())
      })
    };
  };
}
