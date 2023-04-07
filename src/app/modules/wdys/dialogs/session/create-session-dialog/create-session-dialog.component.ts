import {Component, Input, OnInit} from '@angular/core';
import {WdysMeetingPageComponent} from "../../../pages/wdys-meeting-page/wdys-meeting-page.component";
import {
    AddMeetingSessionCommand,
    Participant,
    WdysMeetingService,
    WdysSessionService
} from "../../../../../core/api/v1";
import {PathLocationStrategy} from "@angular/common";
import {MeetingViewEventBusService} from "../../../pages/wdys-meeting-page/services/meeting-view-event-bus.service";

@Component({
  selector: 'wdys-create-session-dialog',
  templateUrl: './create-session-dialog.component.html',
  styleUrls: ['./create-session-dialog.component.scss']
})
export class CreateSessionDialogComponent implements OnInit {

  @Input()
  public meeting: string;

  @Input()
  public participants: Participant[];

  public cmd: AddMeetingSessionCommand;

  public meetingDate: Date;
  public participantsFromMeeting = false;



  constructor(
      private root: WdysMeetingPageComponent,
      private service: WdysMeetingService,
      private eventBus: MeetingViewEventBusService
  ) { }

  ngOnInit(): void {
      this.cmd = {};
      this.meetingDate = new Date();
  }

  public save(){

      if( this.participantsFromMeeting ){
          this.cmd.participants = this.participants;
      }

      this.cmd.meetingDateString = this.toDateString( this.meetingDate );
      this.cmd.meetingId = this.meeting;
      this.service.apiMeetingSessionCmdNewPost( this.cmd ).subscribe( {
          next: value => {
              console.log(value);
              this.eventBus.newSession();
              this.root.showCreateSessionDialog = false;
          }
      } );

  }

  get visible(){
      return this.root.showCreateSessionDialog;
  }

  set visible( b: boolean ){
      this.root.showCreateSessionDialog = b;
  }

    addParticipants(p: Array<Participant>) {
        this.cmd.participants = p;
    }

    private toDateString( date: Date ){

        let day   = date.getDate() >= 10 ? date.getDate().toString() : '0' + date.getDate().toString();
        let m     = date.getMonth() + 1;
        let month = m >= 10 ? m : '0' + m;
        let year  = date.getFullYear();

        console.log( day );
        return year+'-'+month+"-"+day;
    }
}
