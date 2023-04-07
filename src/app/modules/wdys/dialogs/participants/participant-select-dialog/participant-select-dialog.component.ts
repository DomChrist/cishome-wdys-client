import {Component, Input, OnInit} from '@angular/core';
import {AddParticipantRequest, Participant, WdysMeetingService, WdysSessionService} from "../../../../../core/api/v1";
import {ParticipantService} from "../../../services/participant.service";

@Component({
  selector: 'wdys-participant-select-dialog',
  templateUrl: './participant-select-dialog.component.html',
  styleUrls: ['./participant-select-dialog.component.scss']
})
export class ParticipantSelectDialogComponent implements OnInit {

  @Input()
  currentParticipants: Array<Participant>;

  @Input('meeting')
  public meetingId: string;

  @Input()
  public session: string;

  public show = false;

  constructor(
      private participantService: ParticipantService,
      private service: WdysSessionService,
      private meeting: WdysMeetingService
  ) { }

  ngOnInit(): void {
  }

  public showDialog(){
      this.show = true;
  }

  get participants(){
      return this.participantService.participants;
  }

  public add( p: Participant ){
      let r: AddParticipantRequest = {
          meeting : this.meetingId,
          session: this.session,
          participantId : p.id
      }
      this.meeting.apiMeetingSessionCmdParticipantAddPost( r ).subscribe( {
          next: value => console.log(value)
      } );
  }

}
