import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  id: any;

  use: any;

  constructor(private route: ActivatedRoute, private apiservice: ApiService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.apiservice.getSingleUser(this.id!).subscribe((res)=>{
      this.use = res.data;
    })
  }

}
