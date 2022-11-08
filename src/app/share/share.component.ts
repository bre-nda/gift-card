import { Component, OnInit } from '@angular/core';
import { RestShareService } from './rest-share.service';
import { Share } from './share';

@Component({
  selector: 'app-share',
  templateUrl: './share.component.html',
  styleUrls: ['./share.component.css']
})
export class ShareComponent implements OnInit {

  sharing:Share[] = [];
  p: number = 1;
  Beneficiary_Mobile: any;

  constructor(public rs:RestShareService) { }

  ngOnInit(): void {
    this.rs.getGift().subscribe((response) => {
      this.sharing = response;
     });
  }

  Search(){
    if(this.Beneficiary_Mobile == ''){
      this.ngOnInit();
    }else{
      this.sharing = this.sharing.filter(res =>{
        return res.Beneficiary_Mobile.toLocaleLowerCase().match(this.Beneficiary_Mobile.toLocaleLowerCase())
      })
    };
  };

}
