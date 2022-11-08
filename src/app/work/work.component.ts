import { Component, OnInit } from '@angular/core';
import { RestWorkService } from './rest-work.service';
import { Work } from './work';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})
export class WorkComponent implements OnInit {

  work:Work[] = [];
  p: number = 1;
  Beneficiary_Mobile: any;

  constructor(public rs:RestWorkService) { }

  ngOnInit(): void {
    this.rs.getGift().subscribe((response) => {
      this.work = response;
     });
  }

  Search(){
    if(this.Beneficiary_Mobile == ''){
      this.ngOnInit();
    }else{
      this.work = this.work.filter(res =>{
        return res.Beneficiary_Mobile.toLocaleLowerCase().match(this.Beneficiary_Mobile.toLocaleLowerCase())
      })
    };
  };

}
