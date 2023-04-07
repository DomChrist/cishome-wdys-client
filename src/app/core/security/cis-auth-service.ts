import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {ActivatedRoute, Router} from '@angular/router';
import {MessageService} from 'primeng/api';
import {connect, Observable} from 'rxjs';
import {environment} from '../../../environments/environment';
import {AccessToken, CisUser, Keycloak, KeycloakToken} from "./authenticatedUser";
import {validate} from "codelyzer/walkerFactory/walkerFn";
import {waitForAsync} from "@angular/core/testing";

@Injectable({
  providedIn: 'root'
})
export class CisAuthService {

    private readonly EXPIRES_KEY = 'cis_expires';

    private $securityIdentity: SecurityIdentity;
    private expires: number;

    constructor(private router: Router, private route: ActivatedRoute, private http: HttpClient,
                private msg: MessageService) {
    }

    public redirectUrl(): string {
        const path = environment.apps.wdys.base + 'auth/token';
        const redirect = location.protocol + '//' + location.host + path;
        const href = redirect;
        return href;
    }

    public refresh(){
        let uri = environment.keycloak.baseRealm + 'protocol/openid-connect/token';
        let token = localStorage.getItem('cis_refresh');
        let body = {
            client_id : environment.keycloak.client,
            client_secret : environment.keycloak.secret,
            refresh_token : token,
            grant_type : 'refresh_token'
        };
        console.log('refresh call....');
        this.http.post<Keycloak>( uri , body ).subscribe( {
           next : (value) => {
               const a = AccessToken.fromString( value.access_token );
               const u = CisUser.with( a.token );
               this.$securityIdentity = new SecurityIdentity( a , u );
               this.storeToken( value );
               console.log('refresh call done');
           }
        });
    }

    public isExpired(): boolean {
        if( !this.expires ){
            this.expires = Number.parseInt( localStorage.getItem(this.EXPIRES_KEY) );
        }
        const now = new Date().getTime();
        const expired = this.expires < now;
        console.log( now + ' ' + this.expires + ' = ' + expired);
        return expired;
    }

    public jumpToLogin(): void {
        const redirect = environment.cisHome.login + '&redirect_uri=' + this.redirectUrl();
        location.href = redirect;
    }

    public isAuthenticated(): boolean{
        if ( this.$securityIdentity || this.$initSecurityIdentityFromLocalStore() ){
            console.log('isAuthenticated: true');
            return true;
        } else {
            console.log('isAuthenticated: false');
            this.jumpToLogin();
            return false;
        }
    }

    private $initSecurityIdentityFromLocalStore(): boolean {
        this.$securityIdentity = undefined;
        const authToken = AuthToken.init();
        if ( authToken ) {
            this.$securityIdentity = new SecurityIdentity(
                AccessToken.fromString( authToken.authToken ),
                authToken.authUser
            );
        }
        if( !environment.production ){
            console.log(this.$securityIdentity);
        }
        return this.$securityIdentity !== undefined;
    }

    public logout(): void {
        localStorage.removeItem('cis_bearer');
        localStorage.removeItem('cis_access');
        localStorage.removeItem('cis_refresh');
        localStorage.removeItem('cis_idtoken');
        this.router.navigate(['logout']);
        this.$securityIdentity = undefined;
    }

    public oAuth( code: string ){
        const authClient = new OAuthClient(this.http);
        authClient.call( code ).subscribe(
            {
                next: (resp) => this.$success(resp.body),
                error: (e) => this.error(e)
            }
        );
    }

    private $success( k: Keycloak ){
        const a = AccessToken.fromString( k.access_token );
        const u = CisUser.with( a.token );
        this.$securityIdentity = new SecurityIdentity( a , u );
        this.storeToken( k );
        this.router.navigate( [''] );
    }

    private error( e: Error ){
        console.log(e);
    }

    public loginWithToken( k: Keycloak ){
        this.$success(k);
    }

    public storeToken(token: Keycloak){
        try{
            localStorage.setItem( 'cis_bearer' , JSON.stringify(token));
            localStorage.setItem( 'cis_access' , token.access_token );
            localStorage.setItem( 'cis_refresh' , token.refresh_token );
            localStorage.setItem( 'cis_idtoken' , token.id_token );

            const e = new Date();
                e.setSeconds(token.expires_in);

            this.expires = e.getTime();
            localStorage.setItem('cis_expires' , this.expires.toString());
            if( !environment.production ){
                localStorage.setItem('cis_exipres_date' , e.toString());
            }

            return true;
        }catch (e){
            return false;
        }
    }

    public success( summary: string , detail: string ){
        this.msg.add( {severity: 'success' , summary, detail} );
    }

    get securityIdentity(){
        return this.$securityIdentity;
    }

    get plainToken(): string {
        if( !environment.production ){
            console.log('token:')
            console.log(this.securityIdentity.access?.plain);
            console.log( 'expired: ' + this.isExpired() );
        }
        if( this.isExpired() ){
            if( !environment.production ){
                console.log('refresh');
            }
            this.refresh();
            waitForAsync( ()=>{
               this.refresh();
            });
        }
        return this.securityIdentity?.access?.plain;
    }

    async asyncPlainToken(){
        if( !environment.production ){
            console.log('token:')
            console.log(this.securityIdentity.access?.plain);
            console.log( 'expired: ' + this.isExpired() );
        }
        if( this.isExpired() ){
            if( !environment.production ){
                console.log('refresh');
            }
            this.refresh();
            waitForAsync( ()=>{
                this.refresh();
            });
        }
        return this.securityIdentity?.access?.plain;
    }
}

class AuthToken{

    private readonly token: string;
    private readonly user: CisUser;

    public static with( keycloak: Keycloak ){
        const accessToken = keycloak.toAccessToken();
        return CisUser.with( accessToken.token );
    }

    public static of( noToken: () => void ): AuthToken {
        const token = this.fetchToken();
        if ( !token ){
            noToken();
        }
        return new AuthToken(token);
    }

    public static init(): AuthToken {
        const token = this.fetchToken();
        if ( !token ){
            return undefined;
        } else {
            return new AuthToken( token );
        }
    }

    private static fetchToken(): string {
        const token = localStorage.getItem('cis_access');
        if ( token === null || token === undefined || token.trim().length === 0 ){
            return undefined;
        }
        return token;
    }

    constructor( token: string ) {
        this.token = token;
        this.user = this.userFromToken( token );
    }

    private userFromToken(token) {
        const split = token.split('.')[1];
        const json = atob(split);
        const k = JSON.parse(json) as KeycloakToken;
        return CisUser.with( k );
    }

    get authUser(): CisUser {
        return this.user;
    }

    get authToken(): string {
        return this.token;
    }

}

class OAuthClient{
    private $http: HttpClient;

    constructor( http: HttpClient) {
        this.$http = http;
    }

    public call( code: string ): Observable<HttpResponse<Keycloak>> {
        return this.requestBackend( code );
    }

    private requestBackend( code: string ): Observable<HttpResponse<Keycloak>>{
        const host = location.protocol + '//' + location.host + '/auth/token';
        const root = environment.cisHome.service;
        const url = root + 'auth/validate/token?code=' + code + '&host=' + host + '&client=' + environment.keycloak.client;

        const obs: Observable<HttpResponse<Keycloak>> = this.$http.get<Keycloak>(
            url,
            {observe: 'response'}
        );
        return obs;
    }

}

export class SecurityIdentity{

    private $access: AccessToken;
    private $user: CisUser;


    constructor(access: AccessToken, user: CisUser) {
        if( !access || !user ) throw new Error('cannot be empty');
        if( environment.production === false ){
            console.log('--security identity with--');
            console.log(access);
            console.log(user);
            console.log('--security identity with--');
        }
        this.$access = access;
        this.$user = user;
    }


    get access(): AccessToken {
        return this.$access;
    }

    get user(): CisUser {
        return this.$user;
    }
}

