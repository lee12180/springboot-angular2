import { Component } from '@angular/core';
import { LoginService } from '../login/login.service';
import {AccountEventsService} from '../account/account.event.service';

@Component({
  moduleId: module.id,
  selector: 'my-header',
  templateUrl: 'header.component.html',
  providers: [LoginService],
})
export class HeaderComponent {
  authenticated: boolean = false;
  userId: string;

  constructor(private accountEventService:AccountEventsService, loginservice: LoginService) {
    this.authenticated = loginservice.isAuthenticated();
    
    // console.log("HeaderComponent authenticated : " + this.authenticated);

     if(this.authenticated) {
       //this.userId = JSON.parse(localStorage.getItem("account"))["userId"];
       
     }

    accountEventService.subscribe((user) => {
      console.log("HeaderComponent accountEventService subscribe !!!!");
      if(user) {
        this.authenticated = true;
        //this.userId = JSON.parse(localStorage.getItem("account"))["userId"];
        this.userId = user.userId;
      }
    });

  }
  
}
