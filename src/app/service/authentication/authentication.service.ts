import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { SignInData } from 'src/app/Model/signInData';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private readonly mockedUser = new SignInData('admin', 'KAP1985ara@');
  isAuthenticated = false;

  constructor(private router: Router) { }

  authenticate(signInData: SignInData): boolean{
    if(this.checkCredentials(signInData)){
      this.isAuthenticated = true;
      this.router.navigate(['home']);
      return true;
    }
    this.isAuthenticated = false;
    return false;
  }

  private checkCredentials(signInData: SignInData): boolean{
    return this.checkUsername(signInData.getUsername()) && this.checkPassword(signInData.getPassword());
  }

  private checkUsername(username: string): boolean{
    return username === this.mockedUser.getUsername();
  }

  private checkPassword(password: string): boolean{
    return password === this.mockedUser.getPassword();
  }

  logout(){
    this.isAuthenticated = false;
    this.router.navigate(['']);
  }
}
