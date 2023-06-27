import { Component } from '@angular/core';
import { AppMainComponent } from './app.main.component';
import {CisAuthService} from "./core/security/cis-auth-service";
import {CisUser} from "./core/security/authenticatedUser";

@Component({
    selector: 'app-topbar',
    templateUrl: './app.topbar.component.html'
})
export class AppTopBarComponent {

    constructor(public app: AppMainComponent, public readonly auth: CisAuthService) { }


    get user(): CisUser{
        return this.auth.securityIdentity.user;
    }

}
