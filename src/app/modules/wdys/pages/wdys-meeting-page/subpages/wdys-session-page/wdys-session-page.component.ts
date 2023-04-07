import { Component, OnInit } from '@angular/core';
import {WdysMeetingViewComponent} from "../wdys-meeting-view/wdys-meeting-view.component";
import {WdysMeetingPageComponent} from "../../wdys-meeting-page.component";
import {
    MeetingNote,
    MeetingSession, MeetingSessionTimeBooking, SessionTodoAggregate, UpdateSessionDescriptionCommand,
    WdysMeetingService,
    WdysNotesService, WdysTimebookingService,
    WdysTodoService
} from "../../../../../../core/api/v1";
import {ActivatedRoute, Router} from "@angular/router";
import {HttpResponse} from "@angular/common/http";
import {BreadcrumbService} from "../../../../../../app.breadcrumb.service";
import {MeetingViewEventBusService} from "../../services/meeting-view-event-bus.service";

@Component({
  selector: 'app-wdys-session-page',
  templateUrl: './wdys-session-page.component.html',
  styleUrls: ['./wdys-session-page.component.scss']
})
export class WdysSessionPageComponent implements OnInit {

  private $sessionId: string;
  private $session: MeetingSession;
  private $meetingNotes: Array<MeetingNote>;
  private $todos: SessionTodoAggregate;
  public time: MeetingSessionTimeBooking;

  constructor(
      private activeRoute: ActivatedRoute,
      private routing: Router,
      private eventBus: MeetingViewEventBusService,
      private meetingView: WdysMeetingPageComponent,
      private meetingService: WdysMeetingService,
      private todoService: WdysTodoService,
      private noteService: WdysNotesService,
      public timerService: WdysTimebookingService,
      private bread: BreadcrumbService
  ) {
      this.eventBus.meetingInitializedStream.subscribe( {next: (m) => {
              this.activeRoute.paramMap.subscribe( {
                  next: (map) => {
                      this.$sessionId = map.get('session');
                      this.init();
                  }
              } );
          }}
      );
  }

  ngOnInit(): void {
      if( this.meetingView.meeting ){
          this.activeRoute.paramMap.subscribe( {
              next: (map) => {
                  this.$sessionId = map.get('session');
                  this.init();
              }
          } );
      }
      this.eventBus.TodoStream.subscribe( () => {
        this.loadTodos();
      });
  }

  get meetingId(){
      return this.meetingView.id;
  }

    private init() {
      if( this.meetingView.meeting && this.$sessionId ){
          this.$session = this.meetingView.meeting.session.sessions.filter( s => s.meetingSessionId === this.$sessionId )[0];
          this.loadNotes();
          this.loadTodos();
          this.loadTimeBookings();

          this.bread.setItems( [
              {label:'WDYS' , routerLink: '/wdys'},
              {label:'MEETING' , routerLink: '/wdys/meetings/' + this.meetingId},
              {label:'SESSION' , routerLink: '/wdys/meetings/' + this.meetingId +'/session' + '/' + this.$sessionId },
          ] );

          if( !this.$session ){
              this.routing.navigate( ['/wdys/meetings/' + this.meetingView.id] );
          }
      }


    }

    public loadNotes(){
        this.noteService.apiWdysMeetingnoteQuerySessionSessionIDGet( this.$sessionId , 'body' ).subscribe( { next: value => this.handleNote( value )} )
    }

    public loadTodos(){
      this.todoService.apiWdysTodoQuerySessionGet( this.$sessionId , 'body').subscribe({next: value => this.handleTodo(value)});
    }

    public loadTimeBookings(){
        this.timerService.apiMeetingTimebookingQuerySessionSessionIdGet( this.$sessionId , 'response' ).subscribe( {next: value => this.handleTime(value)} );
    }

    private handleNote(value: Array<MeetingNote>) {
        this.$meetingNotes = value;
    }

    private handleTime(value: HttpResponse<MeetingSessionTimeBooking>) {
        this.time = value.body;
    }



    get session(){
      if( !this.$session ){
          this.init();
      }
      return this.$session;
    }

    get meeting(){
      return this.meetingView.meeting;
    }

    get notes(): Array<MeetingNote>{
      return this.$meetingNotes;
    }

    get todos(){
      return this.$todos;
    }

    renew() {
        this.init();
    }

    private handleTodo(value: SessionTodoAggregate) {
        this.$todos = value;
    }


    delete() {
        this.meetingService.apiMeetingSessionCmdSessionDelete( this.session.meetingSessionId)
            .subscribe( {
                next: value => {
                    this.routing.navigate(['/wdys','meetings' , this.meetingId]);
                    this.eventBus.newSession();
                }
            } )
    }

    public updateDescription( value: string ){
      const r: UpdateSessionDescriptionCommand = {
            reference : this.meeting.id,
            sessionId : this.session.meetingSessionId,
            description : value
      }
      this.meetingService.apiMeetingSessionCmdDescriptionPost( r )
          .subscribe({
              next: value => {

              }
          });
    }

    removeParticipant() {

    }

    addParticipant() {

    }
}
