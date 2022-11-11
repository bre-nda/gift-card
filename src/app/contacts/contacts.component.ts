import { Component, OnInit } from '@angular/core';
import contact from './file/contact.json'

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  
  p: number = 1;
  


  constructor() { }

  ngOnInit(): void {
  }


  // Search(){
  //   if(this.User_Mobile == ''){
  //     this.ngOnInit();
  //   }else{
  //     this.contancting = this.contancting.filter(res =>{
  //       return res.User_Mobile.toLocaleLowerCase().match(this.User_Mobile.toLocaleLowerCase())
  //     })
  //   };
  // };
}
