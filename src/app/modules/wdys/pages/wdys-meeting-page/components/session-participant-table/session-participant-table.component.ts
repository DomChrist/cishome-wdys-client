import { Component, OnInit } from '@angular/core';
import {WdysSessionPageComponent} from "../../subpages/wdys-session-page/wdys-session-page.component";
import {ParticipantService} from "../../../../services/participant.service";
import {AddParticipantRequest, Participant, WdysMeetingService} from "../../../../../../core/api/v1";

@Component({
  selector: 'wdys-session-participant-table',
  templateUrl: './session-participant-table.component.html',
  styleUrls: ['./session-participant-table.component.scss']
})
export class SessionParticipantTableComponent implements OnInit {

  constructor(
      public sessionView: WdysSessionPageComponent,
      private participantService: ParticipantService,
      private meetingService: WdysMeetingService
  ) { }

  public show = false;
  public showMobileSidebar = false;

  ngOnInit(): void {
  }


  get participants(){
      return this.sessionView.session.participants;
  }

  get allParticipants(){
      if( this.participantService.participants ){
          return this.participantService.participants.filter( p => {
              let number = this.participants.filter( e=> e.id === p.id ).length;
              return number <= 0;
          } );
      }
      return [];
  }

    removeParticipant() {

    }

    addParticipant(p: Participant) {

      const request: AddParticipantRequest = {
          meeting : this.sessionView.meetingId,
          session : this.sessionView.session.meetingSessionId,
          participantId : p.id
      }

        this.meetingService
            .apiMeetingSessionCmdParticipantAddPost( request )
            .subscribe({
                next: value => {
                    this.sessionView.session.participants.push(p);
                }
            });
    }

    mobileParticipantView(): Array<Participant> {
      const number = 7;
      if( !this.participants || this.participants.length == 0 ) return null;
      if( this.participants.length < number ) return this.participants;
      const p = new Array<Participant>(3);
      for( let i = 0; i < number; i++ ){
          p[i] = this.participants[i];
      }
      return p;
    }
}
