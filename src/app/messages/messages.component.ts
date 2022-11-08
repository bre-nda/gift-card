import { Component, OnInit } from '@angular/core';
import { Message } from './message';
import { RestMessageService } from './rest-message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  message:Message[]=[];
  p: number = 1;
  Out_Mobile_No:any;

  constructor(public rs: RestMessageService) { }

  ngOnInit(): void {
    this.rs.getMessage().subscribe((response) => {
      this.message = response;
     });
  }

  Search(){
    if(this.Out_Mobile_No == ''){
      this.ngOnInit();
    }else{
      this.message = this.message.filter(res =>{
        return res.Out_Mobile_No.toLocaleLowerCase().match(this.Out_Mobile_No.toLocaleLowerCase())
      })
    };
  };

}
