import { Component, OnInit } from '@angular/core';
import { Contacts } from './contacts';
import { RestContactsService } from './rest-contacts.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  contact:Contacts[] = [];
  p: number = 1;
  Beneficiary_Mobile:any;

  constructor(public rs:RestContactsService) { }

  ngOnInit(): void {
    this.rs.getContacts().subscribe((response) => {
      this.contact = response;
     });
  }


  Search(){
    if(this.Beneficiary_Mobile == ''){
      this.ngOnInit();
    }else{
      this.contact = this.contact.filter(res =>{
        return res.Beneficiary_Mobile.toLocaleLowerCase().match(this.Beneficiary_Mobile.toLocaleLowerCase())
      })
    };
  };
}
