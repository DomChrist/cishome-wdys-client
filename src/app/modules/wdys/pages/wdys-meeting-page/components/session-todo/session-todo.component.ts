import { Component, OnInit } from '@angular/core';
import {WdysSessionPageComponent} from "../../subpages/wdys-session-page/wdys-session-page.component";
import {CreateMeetingTodoCommand, MeetingTodo, WdysTodoService} from "../../../../../../core/api/v1";
import {Observable} from "rxjs";
import {ActivatedRoute} from "@angular/router";
import {MeetingViewEventBusService} from "../../services/meeting-view-event-bus.service";

@Component({
  selector: 'wdys-session-todo',
  templateUrl: './session-todo.component.html',
  styleUrls: ['./session-todo.component.scss']
})
export class SessionTodoComponent implements OnInit {

  public showCreateDialog = false;
  public selectedTodo: MeetingTodo;
  public selectedItemId: string;

  public cmd: CreateMeetingTodoCommand;

  constructor(public sessionView: WdysSessionPageComponent,
              private meetingEventBus: MeetingViewEventBusService,
              private activateRoute: ActivatedRoute,
              private todo: WdysTodoService) { }

  ngOnInit(): void {
      this.cmd = {};
      this.activateRoute.queryParamMap.subscribe( m => {
         this.selectedItemId = m.get('todo');
      });

  }

  public addNewTodo(){
      this.cmd.sessionId = this.sessionView.session.meetingSessionId;
      this.cmd.meetingId = this.sessionView.session.meetingId;
      this.todo.apiWdysTodoCmdAddPost( this.cmd ,  'response' ).subscribe({
          next: value => {
              this.meetingEventBus.todo();
              this.cmd = {};
          }
      });
  }

  toggle( t: MeetingTodo ){
      let obs: Observable<any>;
      if( t.checked ){
          obs = this.todo.apiWdysTodoCmdTodoDonePost( t.id );
      } else {
          obs = this.todo.apiWdysTodoCmdTodoOpenPost( t.id );
      }
      obs.subscribe({
         next: value => {
             console.log(value);
             this.meetingEventBus.updateTodo( this.todoList );
         },
          error: ()=>{
             t.checked = !t.checked;
          }
      });
  }

  delete( todo: MeetingTodo ){
      this.todo.apiWdysTodoCmdTodoDelete( todo.id , 'response' ).subscribe({
          next: value => {
              this.sessionView.loadTodos();
          }
      })
  }

  get todoList(){
      return this.sessionView.todos?.todos;
  }

  get showHeader(){
      return false;
  }

}
