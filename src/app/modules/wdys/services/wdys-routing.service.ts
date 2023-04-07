import { Injectable } from '@angular/core';
import {NavigationExtras, Router} from "@angular/router";
import {environment} from "../../../../environments/environment";
import * as path from "path";

@Injectable({
  providedIn: 'root'
})
export class WdysRoutingService {

    public latestMeeting: string;

  constructor(
      private router: Router
  ) { }


 private path( p:Array<string> ){
     const route = [ environment.apps.wdys.base ];
     let i = 1;
     p.forEach( e => {
         route[i] = e;
         i++;
     });
     if( !environment.production){
         console.log(route);
     }
     return route;
 }

  private to( path:Array<string> ){
      const route = this.path(path);
      console.log(route);
      this.router.navigate( route );
  }

  public toMeeting( id: string ){
      this.latestMeeting = id;
      const path = this.path( ['meetings' , id] );
      return this.router.navigate( path );
  }

  public toSession( meeting: string , session: string, obj?: object){
      this.latestMeeting = meeting;
      const path = this.path( ['meetings',meeting,'session',session]  );
      let nav: NavigationExtras;
      if( obj ){
          nav = {
              queryParams : obj
          }
      }

      this.router.navigate( path , nav )
  }

  public createMeeting(){
      return this.router.navigate( this.path(['meetings','create']) );
  }

  get root(){
      return environment.apps.wdys.base;
  }

  meetingPath( m: string ): string[]{
      return this.path(['meetings' , m] );
  }

    toDashboard() {
        const route = [ environment.apps.wdys.base ];
        this.router.navigate( route );
    }
}
