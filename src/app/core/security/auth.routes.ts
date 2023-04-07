import { Routes, RouterModule } from '@angular/router';
import {ModuleWithProviders, NgModule} from '@angular/core';
import {KeycloakResponseComponent} from "./pages/keycloak-response/keycloak-response.component";

@NgModule({
    imports: [
        RouterModule.forChild([
            { path: '', component: KeycloakResponseComponent},
            { path: 'token', component: KeycloakResponseComponent}
        ])
    ],
    exports: [RouterModule]
})
export class AuthRoutingModule {
}
