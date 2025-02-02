import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})

export class LoginComponent {

  userDetails ={
    email :'',
    password : '',
    rememberMe :''
  }

  constructor(private router: Router){}

  submitLoginForm(form:any):void{
    if(form.valid){
      this.router.navigate([""]);
      alert("Successfull Login");
    }else{
      this.router.navigate(["signup"]);
      alert("Wrong Credentials");
    }
  }

  closeLoginForm(){
    this.router.navigate([""]);
  }
}
