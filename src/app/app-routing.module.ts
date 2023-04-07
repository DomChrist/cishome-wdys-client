import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {AppMainComponent} from './app.main.component';
import {AppNotfoundComponent} from './pages/app.notfound.component';
import {AppErrorComponent} from './pages/app.error.component';
import {AppAccessdeniedComponent} from './pages/app.accessdenied.component';
import {AppLoginComponent} from './pages/app.login.component';
import {KeycloakResponseComponent} from "./core/security/pages/keycloak-response/keycloak-response.component";
import {AuthGuard} from "./core/security/auth.guard";

@NgModule({
    imports: [
        RouterModule.forRoot([
            {
                path: '', component: AppMainComponent,
                children: [
                    {path: 'wdys' , loadChildren: () => import ('./modules/wdys/wdys.module').then( m => m.WdysModule ) , canActivate: [AuthGuard]},
                    {path: '' , loadChildren: () => import ('./modules/wdys/wdys.module').then( m => m.WdysModule ) , canActivate: [AuthGuard]}
                ]
            },
            {path: 'error', component: AppErrorComponent},
            {path: 'access', component: AppAccessdeniedComponent},
            {path: 'notfound', component: AppNotfoundComponent},
            {path: 'login', component: AppLoginComponent},
            {path: 'auth/response', component: KeycloakResponseComponent},
            {path: 'auth/token', component: KeycloakResponseComponent},
            {path: '**', redirectTo: '/notfound'},
        ], {scrollPositionRestoration: 'enabled'})
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
