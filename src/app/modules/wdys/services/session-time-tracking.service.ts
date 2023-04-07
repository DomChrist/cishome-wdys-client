import { Injectable } from '@angular/core';
import {MessageService} from "primeng/api";
import {Subject} from "rxjs";
import {BookTimeCommand, MeetingSessionTimeBooking, WdysTimebookingService} from "../../../core/api/v1";

@Injectable({
  providedIn: 'root'
})
export class SessionTimeTrackingService {

    private timerSubject = new Subject<void>();
    public timerActionStream = this.timerSubject.asObservable();

    private timestamps: Map<string, SessionStampTimer> = new Map<string, SessionStampTimer>();


    constructor( private data: WdysTimebookingService,
                 private message: MessageService) { }

    public start(meetingId: string , sessionId: string): SessionStampTimer{
        let timer: SessionStampTimer;
        if( this.timestamps.has(sessionId)){
            timer = this.timestamps.get(sessionId);
        } else {
            timer = new SessionStampTimer();
            timer.id = sessionId;
            timer.meeting = meetingId;
            this.timestamps.set(sessionId, timer);
        }
        timer.play();
        this.timerSubject.next();
        return timer;
    }

    public pause( timer: SessionStampTimer ){
        timer.pause();
        this.timerSubject.next();
    }

    public reset( timer: SessionStampTimer ){
        timer.reset();
        this.timerSubject.next();
    }

    public bookTime( description: string, timer: SessionStampTimer, success: () => void ){
        this.pause(timer);
        const request: BookTimeCommand = {
            reference: timer.id,
            session: timer.id,
            description,
            time: timer.minutes()
        };

        this.data.apiMeetingTimebookingCmdBookPost( request , 'response' ).subscribe({
            next: resp => {
                this.message.add( {severity: 'success' , summary: 'Booking created'}  );
                this.reset(timer);
                success();
            }
        });
    }

    public loadByMeeting( id: string , success:( t: MeetingSessionTimeBooking) => void ){

        this.data.apiMeetingTimebookingQueryMeetingMeetingIdGet( id , 'response' ).subscribe({
            next: (resp) => {
                success( resp.body );
            }
        });
    }

    public loadBySession( id: string , success: ( t: MeetingSessionTimeBooking) => void ){
        this.data.apiMeetingTimebookingQuerySessionSessionIdGet( id , 'response' ).subscribe({
            next: resp => {
                success(resp.body);
            }
        });
    }

    public triggerAction(){
        this.timerSubject.next();
    }

    public timeStamp( meetingId: string, sessionId: string): SessionStampTimer{
        if ( this.timestamps.has(sessionId) ) {
            return this.timestamps.get(sessionId);
        }
        return null;
    }

    current(): SessionStampTimer {
        let timer: SessionStampTimer;
        for(  let t of this.timestamps.values() ){
            if( t.running ){
                timer = t;
                break;
            }
        }
        return timer;
    }
}

export class SessionStampTimer{

    public id: string;
    public meeting: string;

    public running = false;

    public start: Date;
    public stop: Date;

    public timer;

    public time: number = 0;

    public overlapTime: number = 0;

    public play(){
        if(this.running) return this;
        this.running = true;
        this.start = new Date();
        this.timer = window.setInterval( ()=>{
            this.time = new Date().getTime() - this.start.getTime();
        } , 1000 );
        return this;
    }

    public pause(){
        this.running = false;
        this.stop = new Date();
        this.overlapTime += this.time;
        this.time = 0;
        window.clearInterval(this.timer);
    }

    public reset(){
        this.overlapTime = 0;
        this.time = 0;
    }

    public combinedTime(){
        return this.time + this.overlapTime;
    }

    public diff(){
        let t = this.time + this.overlapTime;
        let seconds = Math.floor(( t / 1000)) % 60;
        let minutes = Math.floor(  t / (1000*60) )  % 60;
        let hours = Math.floor( t / (1000*60*60) )  % 60;

        return this.format(hours, minutes, seconds);
    }

    public format(hours: number , minutes: number, seconds: number){
        let hoursString = hours < 10 ? "0"+hours : hours;
        let minutesString = minutes < 10 ? "0"+minutes : minutes;
        let secondsString = seconds < 10 ? "0"+seconds : seconds;

        return hoursString + 'h ' + minutesString + 'm ' + secondsString + 's';
    }

    public minutes(){
        const m = this.time + this.overlapTime;
        return Math.floor(m / (1000 * 60));
    }

}
