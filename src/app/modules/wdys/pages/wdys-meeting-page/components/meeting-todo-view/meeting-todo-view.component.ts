import {Component, Inject, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {MeetingTodo, MeetingTodoAggregate} from "../../../../../../core/api/v1";
import {WdysMeetingPageComponent} from "../../wdys-meeting-page.component";

@Component({
  selector: 'wdys-meeting-todo-view',
  templateUrl: './meeting-todo-view.component.html',
  styleUrls: ['./meeting-todo-view.component.scss']
})
export class MeetingTodoViewComponent implements OnInit {

  @Input()
  public showOnlyOpen = false;

  constructor(
      private routing: Router,
      private root: WdysMeetingPageComponent
  ) { }

  ngOnInit(): void {
  }

    public loadMeetingFromTodo( m: MeetingTodo ){
        this.routing.navigate( ['/wdys/meetings/', m.meetingSessionId.meeting.value, 'session', m.meetingSessionId.session.value] , {
            queryParams: {
                todo : m.id
            }
        } );
    }

    get todos(): MeetingTodoAggregate{
        return this.root?.todos;
    }

    get list(){
      if( this.showOnlyOpen ){
          return this.root.todos.todos.filter( t => !t.checked );
      }
      return this.root.todos.todos;
    }

}
