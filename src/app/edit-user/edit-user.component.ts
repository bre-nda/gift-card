import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';



export class Users{
  id!: number;
  User_Mobile!: string;
  User_Name!: string;
  User_Reg_Date!: string;
}

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  id!: number;
  user: Users = new Users();
  editForm : any;
  

  constructor(
    private fb: FormBuilder,
    private apiservice: ApiService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.user = new Users();
    this.id = this.route.snapshot.params['id'];
    this.apiservice.getSingleUser(this.id).subscribe((res)=>{
      this.editForm.patchValue({
        User_Mobile: res.data[0].User_Mobile,
        User_Name: res.data[0].User_Name,
      })
    });

    this.editForm = this.fb.group({
      User_Mobile: ['', [Validators.required, Validators.minLength(12), Validators.maxLength(12)]],
      User_Name: ['', Validators.required],
    });
  }

  onSubmit() {
    this.apiservice.editUser(this.id, this.user).subscribe((res)=>{
      this.user = new Users();
      this.gotoList();
    })
  }

  // go to list after update
  gotoList(){
    this.router.navigate(['/settings/users'])
  }

}
