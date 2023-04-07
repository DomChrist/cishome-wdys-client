import { Component, OnInit } from '@angular/core';
import {WdysCollaborationService} from "../../../../../../core/api/v1";
import {WdysSessionPageComponent} from "../../subpages/wdys-session-page/wdys-session-page.component";

@Component({
  selector: 'wdys-share-session-button',
  templateUrl: './share-session-button.component.html',
  styleUrls: ['./share-session-button.component.scss']
})
export class ShareSessionButtonComponent implements OnInit {

    public collaboration;

    constructor( private collaborationService: WdysCollaborationService,
                 private sessionView: WdysSessionPageComponent) { }

    ngOnInit(): void {
        this.load();
    }

    get code(){
        if (!this.collaboration) return '';
        return this.collaboration.collaborationSessionCode;
    }

    get link(){
        const uri = location.protocol + '//' + location.hostname + ':' + location.port + '/wdys/meetings/collaborate/session/' + this.sessionView.session.meetingSessionId;
        return uri;
    }


    private load(){
        this.collaborationService.apiMeetingActivateMeetingMeetingSessionSessionGet( this.sessionView.meetingId , this.sessionView.session.meetingSessionId , 'response').subscribe({
            next: (resp) => this.collaboration = resp.body
        });
    }

    public activate(){
        this.collaborationService
            .apiMeetingActivateMeetingMeetingSessionSessionPost( this.sessionView.session.meetingId , this.sessionView.session.meetingSessionId ).subscribe( {
            next: value => this.load()
        } )
    }

    public copy( text: string ){
        navigator.clipboard.writeText( text );
        //this.message.add( {severity:'success' , summary:'copied'} );
    }


}
