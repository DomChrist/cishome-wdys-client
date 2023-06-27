import { Component, OnInit } from '@angular/core';
import {PresentationModeResponse, WdysCollaborationService} from "../../../../core/api/v1";
import {HttpResponse} from "@angular/common/http";
import {ActivatedRoute} from "@angular/router";
import {environment} from "../../../../../environments/environment";
import {webSocket} from "rxjs/webSocket";

@Component({
  selector: 'app-wdys-collaboration-page',
  templateUrl: './wdys-collaboration-page.component.html',
  styleUrls: ['./wdys-collaboration-page.component.scss']
})
export class WdysCollaborationPageComponent implements OnInit {

    private $code: string;
    private $session: string;
    private $valid = false;

    private $response: HttpResponse<PresentationModeResponse>;

    constructor(
        private collaborationService: WdysCollaborationService,
        private route: ActivatedRoute
    ) { }

    ngOnInit(): void {
        this.route.paramMap.subscribe( (map) => {
            this.$session = map.get('session');
        });
    }

    get isValid(){
        return this.$valid;
    }

    public load(){
        this.collaborationService.findSessionCollaboration( this.$session , this.code , 'response' ).subscribe(
            {
                next: (resp) => {
                    this.$valid = true;
                    this.$response = resp;
                    console.log( this.$response );
                    this.listen();
                }
            }
        );
    }

    listen(){
        const path = environment.cisHome.socket + 'meeting/collaboration/change/' + this.$session;
        const subject = webSocket(path);
        subject.subscribe( (data) => {
            console.log(data);
            alert(data);
            this.load();
        } );
    }

    get code(): string{
        return this.$code;
    }

    set code( c: string){
        this.$code = c;
    }

    get response(){
        return this.$response?.body;
    }

}
