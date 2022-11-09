import { Component, OnInit } from '@angular/core';
import contact from './file/contact.json'

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  
  p: number = 1;
  User_Mobile:any;



  contancting:{
    id: string,
    Sender_Name: string,
    User_Name: string,
    Beneficiary_Special_Text: string,
    Beneficiary_Mobile: string,
    Editing_Field: string,
    Mpesa_Code: string,
    Gift_Code: string,
    User_Mobile: string,
    Gift_Amount: string,
    Trans_Date: string,
    Gift_Type: string,
    Status: string,

  }[]=contact;


  constructor() { }

  ngOnInit(): void {
  }


  Search(){
    if(this.User_Mobile == ''){
      this.ngOnInit();
    }else{
      this.contancting = this.contancting.filter(res =>{
        return res.User_Mobile.toLocaleLowerCase().match(this.User_Mobile.toLocaleLowerCase())
      })
    };
  };
}
