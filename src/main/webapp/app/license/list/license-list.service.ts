import { Injectable } from '@angular/core';
import {Http,Response,Headers} from '@angular/http';
import {Observable} from 'rxjs/Observable';

import { License } from '../license';

@Injectable()
export class LicenseListService {
    private licenseUrl = 'api/license';
    

    http:Http;
    constructor(http:Http) {
        this.http = http;
        
     }

    getLicenseList(): Observable<Array<License>> {
        console.log('call service getLicenseList ~!');
        return this.http.get(this.licenseUrl + '/list')
            .map(res => {
                console.log(res);
                let licenseList:Array<License> = [];
                let jsonResults:Array<any> = res.json();

                jsonResults.forEach((jsonResult) => {
                    console.log("jsonResult :: ");
                    console.log(jsonResult);
                    licenseList.push(new License(jsonResult));
                });

                return licenseList;
            })   
        
        
    }
}