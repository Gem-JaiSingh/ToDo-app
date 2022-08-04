import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loginForm !: FormGroup

  constructor(private router : Router) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      
      
      loginemail: new FormControl (
          "",
          [
            Validators.required,
            Validators.maxLength(60),
            Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"),
          ]),
          loginpassword: new FormControl (
            "",
            [
              Validators.required,
              Validators.minLength(8),
              Validators.maxLength(20),
              
            ]),
      
      
    });
  }

  login(){
    console.log("jai",this.loginForm);
    this.loginForm.markAllAsTouched()
    if(this.loginForm.status=='VALID'){
      console.log(this.loginForm.status);
      alert("Login Successfully");
      this.loginForm.reset();
      this.router.navigate(['todo']);
    }
  }

}
