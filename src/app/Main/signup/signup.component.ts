import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public signupForm !: FormGroup

  constructor(private route : Router) { }

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      fullName: new FormControl (
        "",
        [
          Validators.required,
          Validators.maxLength(90),
          
        ]),
      mobileNumber: new FormControl (
        "",
        [
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(10),
          Validators.pattern("[6-9]\\d{9}"),
        ]),
        emailAddress: new FormControl (
          "",
          [
            Validators.required,
            Validators.maxLength(60),
            Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"),
          ]),
          password: new FormControl (
            "",
            [
              Validators.required,
              Validators.minLength(8),
              Validators.maxLength(20),
              
            ]),
      
      
    });
  }

  signup(){
    console.log("jai",this.signupForm);
    this.signupForm.markAllAsTouched()
    if(this.signupForm.status=='VALID'){
      console.log(this.signupForm.status);
      alert("SignUp Successfully");
      this.signupForm.reset();
      this.route.navigate(['login']);
    }
   
    
  }
  isNumberKey(evt: any) {
    if (
      (evt.key >= "0" && evt.key <= "9") ||
      evt.key == "Backspace" ||
      evt.key == "Delete" ||
      evt.key == "ArrowLeft" ||
      evt.key == "ArrowRight"
    ) {
      return true;
    }
    return false;
  }
}
