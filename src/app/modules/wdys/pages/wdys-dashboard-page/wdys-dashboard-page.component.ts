import { Component, OnInit } from '@angular/core';
import {
    LatestActivitiesJpaEntity,
    MeetingDashboardCountJpaEntity, MeetingDashboardJpaEntity,
    MeetingListResponse, MostCommunicativeParticipantJpaEntity, OverDueJpaEntity,
    WdysDashboardService,
    WdysMeetingService
} from "../../../../core/api/v1";
import {BreadcrumbService} from "../../../../app.breadcrumb.service";
import {WdysRoutingService} from "../../services/wdys-routing.service";

@Component({
  selector: 'wdys-dashboard-page',
  templateUrl: './wdys-dashboard-page.component.html',
  styleUrls: ['./wdys-dashboard-page.component.scss' , '../../../../../assets/demo/badges.scss']
})
export class WdysDashboardPageComponent implements OnInit {

  public meetingList: MeetingListResponse;
  public counting: MeetingDashboardCountJpaEntity;
  public todos: Array<OverDueJpaEntity>;
  public lastEdited: Array<MeetingDashboardJpaEntity>;
  public mostCommunication: Array<MostCommunicativeParticipantJpaEntity>;
  public latestActivity: Array<LatestActivitiesJpaEntity>;

  constructor(
      private wdys: WdysMeetingService,
      private dash: WdysDashboardService,
      private bread: BreadcrumbService,
      public router: WdysRoutingService
  ) { }

  ngOnInit(): void {
      this.wdys.apiMeetingQueryGet( 'response' ).subscribe( {next: resp => this.handleMeetings(resp.body)} );
      this.dash.apiMeetingDashboardQueryCountingsGet('response').subscribe({next: (resp) => this.handleCounting(resp.body)} );
      this.dash.apiMeetingDashboardQueryOverdueGet( 'body' ).subscribe( {next: value => this.handleTodo(value)} );
      this.dash.apiMeetingDashboardQueryLastEditedMeetingsGet('body').subscribe( {next: value => this.handleLastEdited(value)} );
      this.dash.apiMeetingDashboardQueryMostCommunicationsGet('body').subscribe( {next: value =>  this.handleMostCommunication(value)} );
      this.dash.apiMeetingDashboardQueryLatestActivityGet('body').subscribe( {next: value => this.handleActivities(value)} );


      this.bread.setItems([{label: 'WDYS' , routerLink: '/wdys'}])
  }

    private handleMeetings(body: MeetingListResponse) {
        this.meetingList = body;
    }

    private handleCounting(body: MeetingDashboardCountJpaEntity) {
        this.counting = body;
    }

    private handleTodo(value: Array<OverDueJpaEntity>) {
        this.todos = value;
    }

    private handleLastEdited(value: Array<MeetingDashboardJpaEntity>) {
        this.lastEdited = value;
    }

    private handleMostCommunication(value: Array<MostCommunicativeParticipantJpaEntity>) {
        this.mostCommunication = value;
    }

    private handleActivities(value: Array<LatestActivitiesJpaEntity>) {
        this.latestActivity = value;
    }

    get latestFive(){
      return this.latestActivity?.slice(0,5);
    }
}
