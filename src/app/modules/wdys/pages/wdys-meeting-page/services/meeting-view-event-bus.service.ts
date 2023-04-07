import { Injectable } from '@angular/core';
import {Observable, Subject} from "rxjs";
import {Meeting, MeetingTodo} from "../../../../../core/api/v1";

@Injectable({
  providedIn: 'root'
})
export class MeetingViewEventBusService {

   public todoSubject = new Subject<MeetingTodo[]>();
   public TodoStream: Observable<MeetingTodo[]> = this.todoSubject.asObservable();

   public meetingSubject = new Subject<Meeting>();
   public meetingInitializedStream: Observable<Meeting> = this.meetingSubject.asObservable();

   private sessionSubject = new Subject<SessionEvent>();
   public sessionUpdateStream = this.sessionSubject.asObservable();

  constructor() { }

  public meetingInitialized( m: Meeting ){
      this.meetingSubject.next( m );
  }

  public todo(){
      this.todoSubject.next(null);
  }

  public updateTodo( list: MeetingTodo[] ){
      this.todoSubject.next( list );
  }


    newSession() {
        this.sessionSubject.next(SessionEvent.CREATE);
    }

    session( type: SessionEvent ){
      this.sessionSubject.next(type);
    }
}

enum MeetingEvent{

    CREATE,
    UPDATE,
    DELETE

}

enum SessionEvent{

    CREATE,
    UPDATE,
    DELETE

}


