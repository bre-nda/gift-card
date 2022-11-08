import { Component, OnInit } from '@angular/core';
import { Friend } from './friend';
import { RestFriendService } from './rest-friend.service';

@Component({
  selector: 'app-friend',
  templateUrl: './friend.component.html',
  styleUrls: ['./friend.component.css']
})
export class FriendComponent implements OnInit {

  refer:Friend[] = [];
  p: number = 1;
  Beneficiary_Mobile: any;

  constructor(public rs:RestFriendService) { }

  ngOnInit(): void {
    this.rs.getGift().subscribe((response) => {
      this.refer = response;
     });
  }

  Search(){
    if(this.Beneficiary_Mobile == ''){
      this.ngOnInit();
    }else{
      this.refer = this.refer.filter(res =>{
        return res.Beneficiary_Mobile.toLocaleLowerCase().match(this.Beneficiary_Mobile.toLocaleLowerCase())
      })
    };
  };


}
