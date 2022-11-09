import { Component, OnInit } from '@angular/core';
import work from './file/work.json';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})
export class WorkComponent implements OnInit {

  
  p: number = 1;
  User_Mobile: any;

  working:{
    
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
  }[]=work;

  constructor() { }

  ngOnInit(): void {
    
  }

  Search(){
    if(this.User_Mobile == ''){
      this.ngOnInit();
    }else{
      this.working = this.working.filter(res =>{
        return res.User_Mobile.toLocaleLowerCase().match(this.User_Mobile.toLocaleLowerCase())
      })
    };
  };

}
