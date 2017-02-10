import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class AccountEventsService extends Subject<any> {
    constructor() {
        super();
    }
    loginSuccess(user:any) {
        console.log("AccountEventsService loginSuccess user ::" + user)
        if(user) {
            //user.authenticated = true;
            super.next(user);
        }
    }
    logout(user:any) {
        if(user) {
            //user.authenticated = false;
            super.next(user);
        }
    }
}
