import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import share from './file/share.json';

@Component({
  selector: 'app-share',
  templateUrl: './share.component.html',
  styleUrls: ['./share.component.css']
})
export class ShareComponent implements OnInit {

  
  p: number = 1;
  User_Mobile: any;
  sharing: any;

  

  constructor(private apiservice:ApiService) { }
  
  ngOnInit(): void {
    this.getAvailableShare();
  }

  getAvailableShare(){
    this.apiservice.getAllShares().subscribe((res)=>{
      this.sharing = res.data;
    });
  }

  Search(){
    if(this.User_Mobile == ''){
      this.ngOnInit();
    }else{
      this.sharing = this.sharing.filter((res: { User_Mobile: string; }) =>{
        return res.User_Mobile.toLocaleLowerCase().match(this.User_Mobile.toLocaleLowerCase())
      })
    };
  };

}
