import { Component, OnInit } from '@angular/core';
import {WdysMeetingPageComponent} from "../../wdys-meeting-page.component";
import {MeetingSession} from "../../../../../../core/api/v1";
import {PrimeIcons} from "primeng/api";
import {Router} from "@angular/router";

@Component({
  selector: 'wdys-meeting-session-list',
  templateUrl: './meeting-session-list.component.html',
  styleUrls: ['./meeting-session-list.component.scss']
})
export class MeetingSessionListComponent implements OnInit {

  constructor(
      public root: WdysMeetingPageComponent,
      private routing: Router
  ) { }

  ngOnInit(): void {
  }

  get meeting(){
      return this.root.meeting;
  }

    openSession(meetingSessionId: string) {
        this.routing.navigate( ['/wdys/meetings' , this.root.meeting.id , 'session' , meetingSessionId] );
    }

    participants(s: MeetingSession) {
        return s.participants;
    }

    get icon(){
        return PrimeIcons.ENVELOPE;
    }

    get color(){
        return "#43B3D0FF";
    }

}

