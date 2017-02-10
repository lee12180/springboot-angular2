import { Component, OnInit } from '@angular/core';

import { LicenseListService } from './license-list.service';

import { License } from '../license'

@Component({
    moduleId: module.id,
    selector: 'license-list',
    templateUrl: 'license-list.component.html',
    providers: [LicenseListService]
})
export class LicenseListComponent implements OnInit {
    licenseList: Array<License>;

    constructor(private licenseListService: LicenseListService) { }

    getLicenseList():void{
        this.licenseListService.getLicenseList().subscribe(
            a => {this.licenseList = a;}
        );
    }

    ngOnInit() { 
        this.getLicenseList();
    }
}