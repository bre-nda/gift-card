import { Component, OnInit } from '@angular/core';
import { RestUsersService } from './rest-users.service';
import { Users } from './users';

@Component({
  selector: 'app-settings-users',
  templateUrl: './settings-users.component.html',
  styleUrls: ['./settings-users.component.css']
})
export class SettingsUsersComponent implements OnInit {

  users:Users[] = [];

  constructor(public rs:RestUsersService) { }

  ngOnInit(): void {
    this.rs.getUsers().subscribe((response) => {
      this.users = response;
     });
  }

}
