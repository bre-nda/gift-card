import { Component, OnInit } from '@angular/core';
import { RestSessionsService } from './rest-sessions.service';
import { Sessions } from './sessions';

@Component({
  selector: 'app-sessions',
  templateUrl: './sessions.component.html',
  styleUrls: ['./sessions.component.css']
})
export class SessionsComponent implements OnInit {

  sess:Sessions[] = [];
  p: number = 1;
  phone_no:any;

  constructor(public rs:RestSessionsService) { }

  ngOnInit(): void {
    this.rs.getSessions().subscribe((response) => {
      this.sess = response;
     });
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
