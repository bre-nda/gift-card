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
  selector: 'app-setting-create-user',
  templateUrl: './setting-create-user.component.html',
  styleUrls: ['./setting-create-user.component.css']
})
export class SettingCreateUserComponent implements OnInit {

  errormsg: any;
  successmsg: any;
  user: Users = new Users();
  userForm: any;

  constructor(
    private fb: FormBuilder,
    private apiservice: ApiService,
    private actrouter: ActivatedRoute,
    private router: Router,
    
  ) { }

  ngOnInit(): void {
    this.userForm = this.fb.group({
      User_Mobile:['', [Validators.required, Validators.minLength(12), Validators.maxLength(12)]],
      User_Name:['', Validators.required],
      
    });
  }

  onSubmit(){
    if (!this.userForm.valid){
      return;
    }
    if(this.userForm.valid){
      this.apiservice.createNewUser(this.userForm.value).subscribe((res)=>{
        console.log(res, 'data submitted');
        this.userForm.reset();
        this.successmsg = res.message;
      })
    }else {
      this.errormsg = 'All field required.';
    }
  }

}
