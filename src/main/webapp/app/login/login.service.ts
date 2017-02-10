import {Injectable} from '@angular/core';
import {Http,Response,Headers} from '@angular/http';
import {Router} from "@angular/router";

import {Observable} from 'rxjs/Observable';

import {User} from './user';

import {AccountEventsService} from '../account/account.event.service';

@Injectable()
export class LoginService {
  private headers = new Headers({'Content-Type': 'application/json'});
  private accountUrl = 'api/account';  // URL to web api
  http:Http;

  constructor(private router: Router, http:Http, private accountEventService:AccountEventsService) {
    this.http = http;
  }

  authenticate(userId: string, password: string): Observable<User>  {
    console.log('authenticate service userId: ' + userId + ' password: ' + password);
    let headers = new Headers();
        headers.append('Content-Type', 'application/json');
    
    return this.http.post(this.accountUrl + '/login', JSON.stringify({userId:userId,password:password}),{headers:headers})
            .map((res:Response) => {
                console.log("res :: " + res);
                console.log(res);
                console.log(typeof(res))
                //let userList:Array<User> = [];
                //let jsonResults:Array<any> = res.json();
                //console.log(jsonResults);
                
                // jsonResults.forEach((jsonResult) => {
                //     console.log("jsonResult :: ");
                //     console.log(jsonResult);
                //     userList.push(new User(jsonResult));
                // });

                try {
                    let user:User = new User(res.json());
                    console.log(user);     

                    this.loginSuccess(user);
                    console.log('end service authenticate ~!');
                    return user;
                } catch (error) {
                    console.log("error: " + error);
                }

            }).catch(this.handleError);

  }

  loginSuccess(user:User) {
      if(user) {
        //localStorage.setItem("account", user);
        this.accountEventService.loginSuccess(user);
      }    
  }

  isAuthenticated():boolean {
      return !!localStorage.getItem("account");
  }

    logout() {
        this.http.get(this.accountUrl + '/logout').subscribe(() => {
                localStorage.removeItem("account");
                //this.router.navigate(['login']);
        });
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

}
