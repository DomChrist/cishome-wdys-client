import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {
    LatestActivitiesJpaEntity,
    Meeting,
    MeetingTodoAggregate,
    WdysMeetingService,
    WdysTodoService
} from "../../../../core/api/v1";
import {BreadcrumbService} from "../../../../app.breadcrumb.service";
import {MeetingViewEventBusService} from "./services/meeting-view-event-bus.service";
import {WdysRoutingService} from "../../services/wdys-routing.service";

@Component({
  selector: 'app-wdys-meeting-page',
  templateUrl: './wdys-meeting-page.component.html',
  styleUrls: ['./wdys-meeting-page.component.scss']
})
export class WdysMeetingPageComponent implements OnInit {

    private $id: string;
    private $meeting: Meeting;
    private $todos: MeetingTodoAggregate;
    private $activities: Array<LatestActivitiesJpaEntity>;

    public showCreateSessionDialog = false;


    constructor(
        private routing: ActivatedRoute,
        private router: WdysRoutingService,
        private meetingService: WdysMeetingService,
        private eventBus: MeetingViewEventBusService,
        private todoService: WdysTodoService,
        private bread: BreadcrumbService
    ) { }

    ngOnInit(): void {
        this.$id = this.routing.snapshot.paramMap.get('meeting');
        this.routing.paramMap.subscribe( {next: value => {
                this.$id = value.get('meeting');
                this.bread.setItems( [
                    {label:'WDYS' , routerLink: '/wdys'},
                    {label:'MEETING' , routerLink: '/wdys/meetings/' + this.$id},
                ] );
                this.loadMeeting();
                this.loadActivites();
                this.loadTodos();
            }}
        );

        this.eventBus.TodoStream.subscribe( (id) => this.loadTodos() );
        this.eventBus.sessionUpdateStream.subscribe( { next: () => this.loadMeeting() } );

    }

    delete() {
        this.meetingService.apiMeetingCmdIdDelete( this.$id , 'response' ).subscribe( {
            next: value => {
                this.router.toDashboard();
            }
        });
    }

    private loadMeeting(){
        this.meetingService.apiMeetingQueryIdGet( this.$id).subscribe( {next: value => this.handleMeeting( value )} );
    }

    private loadActivites(){
        this.meetingService.apiMeetingQueryActivityMeetingGet( this.$id ).subscribe( {next: value => this.$activities =  value} );
    }

    private loadTodos(){
        this.todoService.apiWdysTodoQueryMeetingGet( this.$id , 'body' ).subscribe( { next: value => this.handleMeetingTodo(value)} );
    }

    get id(){
        return this.$id;
    }

    private handleMeeting(value: Meeting) {
        this.$meeting = value;
        this.eventBus.meetingInitialized( this.$meeting);
    }

    get meeting(): Meeting {
        return this.$meeting;
    }

    private handleMeetingTodo(value: MeetingTodoAggregate) {
        this.$todos = value;
    }

    get todos(){
        return this.$todos;
    }

    get activities(){
        return this.$activities;
    }

    get participantsFromMeeting(){
        return this.$meeting?.participants;
    }


}
