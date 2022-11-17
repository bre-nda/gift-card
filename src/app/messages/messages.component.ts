import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import messages from './file/messages.json';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  
  p: number = 1;
  Out_Mobile_No:any;
  message: any;

  
  constructor(private apiservice:ApiService) { }

  ngOnInit(): void {
    this.getAvailableMess();
  }

  getAvailableMess(){
    this.apiservice.getAllMessages().subscribe((res)=>{
      this.message = res.data;
    });
  }

  Search(){
    if(this.Out_Mobile_No == ''){
      this.ngOnInit();
    }else{
      this.message = this.message.filter((res: { Out_Mobile_No: string; }) =>{
        return res.Out_Mobile_No.toLocaleLowerCase().match(this.Out_Mobile_No.toLocaleLowerCase())
      })
    };
  };

}
