import { Component, OnInit } from '@angular/core';
import {WdysSessionPageComponent} from "../../subpages/wdys-session-page/wdys-session-page.component";
import {CreateNewMeetingNoteCommand, Participant, WdysNotesService} from "../../../../../../core/api/v1";

@Component({
  selector: 'wdys-create-session-note',
  templateUrl: './create-session-note.component.html',
  styleUrls: ['./create-session-note.component.scss']
})
export class CreateSessionNoteComponent implements OnInit {
    visible: boolean = false;
    note: CreateNewMeetingNoteCommand;
    participant: Participant;

  constructor(
      private sessionView: WdysSessionPageComponent,
      private noteService: WdysNotesService
  ) { }

  ngOnInit(): void {

  }

  public toggle(){
      this.visible = !this.visible;
      if( this.visible ){
          this.note = {};
      }
  }

  public save(){
      this.note.sessionId = this.session.meetingSessionId;
      this.note.meetingId = this.session.meetingId;
      if( this.participant ){
          this.note.participantId = this.participant.id;
      }
      this.noteService.apiWdysMeetingnoteCmdNewPost(
          this.note , 'response'
      ).subscribe( {
          next: value => { this.sessionView.renew()}
      });
  }

  get session(){
      return this.sessionView.session;
  }

  get participants(){
      return this.session.participants;
  }

    select(p: Participant) {
        this.participant = p;
    }
}
