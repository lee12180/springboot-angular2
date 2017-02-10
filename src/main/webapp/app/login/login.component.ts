import { Component } from '@angular/core';
import {FormBuilder, Validators, FormGroup, FormControl} from '@angular/forms';
import {Router} from "@angular/router";

import {LoginService} from './login.service';

import {HeaderComponent} from '../include/header.component';

@Component({
  moduleId: module.id,
  selector: 'login',
  templateUrl: 'login.component.html',
  providers: [LoginService]
})

export class LoginComponent{

  loginForm: FormGroup;
  userId: FormControl;
  
  loginService: LoginService;

  loginErrorMsg: String;

   constructor(private router: Router, loginService: LoginService, form: FormBuilder) {
     this.loginService = loginService;

     this.userId = new FormControl('', Validators.required)
     this.loginForm = form.group({
       userId: this.userId,
       password:  ['', [Validators.required,
        Validators.minLength(4),
        Validators.maxLength(12)]
        ]
     });

    }

    authenticate(event:any) {
      console.log("authenticate event !!!!");
      console.log(event);
      this.loginService.authenticate(this.loginForm.value.userId, this.loginForm.value.password)
        .subscribe(user => {
          console.log("login component authenticate user : " + user);
          if(user) {
            this.router.navigate(['/product']);
          }else {
            this.loginErrorMsg = "로그인 실패함";
          }
        });

      console.log("authenticate event finish !!!!");
      //event.preventDefault();
    }
    
    logout(event:any):void {
        console.log("logout !!!!");
        this.loginService.logout();
    }
}
