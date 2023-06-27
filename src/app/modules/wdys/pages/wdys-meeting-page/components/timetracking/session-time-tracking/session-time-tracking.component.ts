import { Component, OnInit } from '@angular/core';
import {WdysSessionPageComponent} from "../../../subpages/wdys-session-page/wdys-session-page.component";
import {BookTimeCommand} from "../../../../../../../core/api/v1";
import {SessionTimeTrackingService} from "../../../../../features/timetracking/services/session-time-tracking.service";

@Component({
  selector: 'wdys-session-time-tracking',
  templateUrl: './session-time-tracking.component.html',
  styleUrls: ['./session-time-tracking.component.scss']
})
export class SessionTimeTrackingComponent implements OnInit {

  public description;
  public cmd: BookTimeCommand;

  constructor(
      private sessionView: WdysSessionPageComponent,
      private sessionTimerService: SessionTimeTrackingService
  ) { }

  ngOnInit(): void {
      this.cmd = {};
  }

  get session(){
      return this.sessionView.session;
  }

  get time(){
      return this.sessionView.time;
  }




}
