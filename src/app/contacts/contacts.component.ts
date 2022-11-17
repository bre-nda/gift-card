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
  User_Mobile!: string;



  


  constructor(private apiservice:ApiService) { }

  ngOnInit(): void {
    this.getAvailableBalance();
  }

  getAvailableBalance(){
    this.apiservice.getAllContacts().subscribe((res)=>{
      this.cont = res.data;
    });
  }
  

  Search(){
    if(this.User_Mobile == ''){
      this.ngOnInit();
    }else{
      this.cont = this.cont.filter((res: { User_Mobile: string; }) =>{
        return res.User_Mobile.toLocaleLowerCase().match(this.User_Mobile.toLocaleLowerCase())
      })
    };
  };
}
