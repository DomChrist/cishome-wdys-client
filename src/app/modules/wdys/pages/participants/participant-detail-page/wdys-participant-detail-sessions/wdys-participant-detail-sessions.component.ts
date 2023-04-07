import { Component, OnInit } from '@angular/core';
import {ParticipantDetailPageComponent} from "../participant-detail-page.component";
import {MeetingSession, WdysParticipantService} from "../../../../../../core/api/v1";

@Component({
  selector: 'wdys-participant-detail-sessions',
  templateUrl: './wdys-participant-detail-sessions.component.html',
  styleUrls: ['./wdys-participant-detail-sessions.component.scss']
})
export class WdysParticipantDetailSessionsComponent implements OnInit {


    private $sessions: MeetingSession[];

  constructor(
      private root: ParticipantDetailPageComponent,
      private service: WdysParticipantService
  ) { }

  ngOnInit(): void {
    this.init();
  }

  private init(){
      this.service.apiWdysParticipantQueryParticipantParticipantSessionsGet( this.root.selected.id )
          .subscribe({ next: value => this.handle(value)});
  }

    private handle(value: MeetingSession[]) {
        this.$sessions = value;
    }

    get sessions(): MeetingSession[] {
        return this.$sessions;
    }

}
