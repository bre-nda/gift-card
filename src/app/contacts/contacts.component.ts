import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import contact from './file/contact.json'

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  
  p: number = 1;
  cont: any;


  


  constructor(private apiservice: ApiService) { }

  ngOnInit(): void {
    this.getAvailableContacts();
  }

  getAvailableContacts(){
    this.apiservice.getAllContacts().subscribe((res)=>{
      this.cont = res.data;
    });
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
