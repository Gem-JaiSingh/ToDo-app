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

  constructor() { }

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

}
