import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {environment} from "../../../../../environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {CisAuthService} from "../../cis-auth-service";
import {Keycloak} from "../../authenticatedUser";

@Component({
  selector: 'app-keycloak-response',
  templateUrl: './keycloak-response.component.html',
  styleUrls: ['./keycloak-response.component.scss']
})
export class KeycloakResponseComponent implements OnInit {

  private plainToken: string;
  private part1: string;
  private part2: string;
  private part3: string;

  constructor(
      private route: ActivatedRoute,
      private http: HttpClient,
      private security: CisAuthService
  ) { }

  ngOnInit(): void {
      let code = this.route.snapshot.queryParamMap.get('code');

      const keycloak = location.protocol + '//' + 'localhost:8082' + '/auth/realms/' + environment.keycloak.realm + '/protocol/openid-connect/token';
      const redirect = this.security.redirectUrl();

      let headers = new HttpHeaders();
      headers = headers.append('Content-Type' , 'application/x-www-form-urlencoded');

      let params = new URLSearchParams();
      params.set('code',code);
      params.set('grant_type' , 'authorization_code');
      params.set('client_id' , environment.keycloak.client );
      params.set('client_secret', environment.keycloak.secret );
      params.set('redirect_uri' , redirect );

      this.http.post<Keycloak>( keycloak, params , {headers : headers} ).subscribe( {
          next: value => {
              console.log(value);
              this.plainToken = value.access_token;
              let split = this.plainToken.split('.');

              this.part1 = atob(split[0]);
              this.part2 = atob(split[1]);
              this.part3 = split[2];

              this.security.loginWithToken(value);
          } ,
          error: (err) => {
              this.security.jumpToLogin();
          }
      });
  }

}
