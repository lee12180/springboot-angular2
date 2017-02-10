import { Component } from '@angular/core';
import {Router} from '@angular/router';

import './rxjs-operators';

@Component({
  selector: 'my-app',
  templateUrl: './app/app.html',
})
export class AppComponent  {
  constructor(router: Router) {
    console.log('app component constructor!@@');
    router.navigate(['login']);
  }
}