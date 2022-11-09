import { Component, OnInit } from '@angular/core';
import messages from './file/messages.json';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  
  p: number = 1;
  Out_Mobile_No:any;

  message:{
    Out_ID: string,
        Trans_Date: string,
        Out_Mobile_No: string,
        Out_Text: string,
        Out_Status: string,
        Out_Response: string,
        Out_Msg_Type: string,
        Out_Trans_ID: string,
        Out_Processed_Status: string,
        Out_Vendor_ID: string,
        Out_Msg_ID: string,
        Total_Characters: string,
        Total_Msgs: string,
        Msg_Content_ID: string,

  }[]=messages

  constructor() { }

  ngOnInit(): void {
   
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
