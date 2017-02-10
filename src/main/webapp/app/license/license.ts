export class License {
    licenseId:number;
    activationKey:string;
    

     constructor(license?:{licenseId:number, activationKey:string}) {
        this.licenseId = license.licenseId;
        this.activationKey = license.activationKey;       
     }
}