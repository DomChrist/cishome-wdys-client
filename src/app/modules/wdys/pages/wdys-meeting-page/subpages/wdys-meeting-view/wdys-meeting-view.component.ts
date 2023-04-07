import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {WdysMeetingPageComponent} from "../../wdys-meeting-page.component";
import {BreadcrumbService} from "../../../../../../app.breadcrumb.service";
import {MeetingViewEventBusService} from "../../services/meeting-view-event-bus.service";
import {MeetingSession} from "../../../../../../core/api/v1";

@Component({
  selector: 'app-wdys-meeting-view',
  templateUrl: './wdys-meeting-view.component.html',
  styleUrls: ['./wdys-meeting-view.component.scss']
})
export class WdysMeetingViewComponent implements OnInit {


  constructor(
      private root: WdysMeetingPageComponent,
      private eventBus: MeetingViewEventBusService,
      private routing: ActivatedRoute,
      private bread: BreadcrumbService
  ) { }

  ngOnInit(): void {
      this.bread.setItems([
          {label: 'WDYS' , routerLink: '/wdys'},
          {label: 'MEETINGS' , routerLink: '/wdys/meetings/' + this.id}
      ])

  }

  public showCreateSessionDialog(){
      this.root.showCreateSessionDialog = !this.root.showCreateSessionDialog;
  }

  get id(){
      return this.root.id;
  }

  get meeting(){
      return this.root.meeting;
  }

  get todos(){
      return this.root.todos;
  }

  lastSession(): MeetingSession {
    return this.meeting.session.first;
  }

    open(meetingSession: MeetingSession) {

    }

    delete() {
        this.root.delete();
    }
}
