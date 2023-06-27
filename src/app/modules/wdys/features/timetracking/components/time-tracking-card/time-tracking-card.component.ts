import {Component, Input, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {BookTimeCommand} from "../../../../../../core/api/v1";
import {SessionStampTimer, SessionTimeTrackingService} from "../../services/session-time-tracking.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-time-tracking-card',
  templateUrl: './time-tracking-card.component.html',
  styleUrls: ['./time-tracking-card.component.scss']
})
export class TimeTrackingCardComponent implements OnInit {

    public readonly START: State = { type: "start", background: '#689F38', color: 'snow' , text: 'START' , icon: 'pi-play' , action: () => this.play() };
    public readonly RUNNING: State = { type: "running", background: '#D32F2F', color: 'snow' , text: 'STOP' , icon: 'pi-clock' , action: () => this.pause() };
    public readonly PAUSE: State = { type: "pause", background: '#fff9a8', color: 'black' , text: 'PAUSE' , icon: 'pi-pause' , action: () => this.pause() };

    public state: State = this.START;

    @Input()
    public sessionId: string;
    @Input()
    public meetingId: string;

    public showBookingDialog = false;
    public cmd: BookTimeCommand;


    @ViewChild('booking') booking: TemplateRef<any>;

    public timer: SessionStampTimer;
    private subscription: Subscription;

    constructor(private timerService: SessionTimeTrackingService) { }

    ngOnInit(): void {
        this.init();
        this.subscription = this.timerService.timerActionStream.subscribe( () => {
            this.init();
        });
    }

    ngOnDestroy() {
        if ( this.subscription ) {
            this.subscription.unsubscribe();
        }
    }

    public init(): void{
        this.timer = this.timerService.timeStamp(this.meetingId, this.sessionId);
        this.cmd = {};
    }

    book() {
        this.cmd.session = this.sessionId;
        this.cmd.meeting = this.meetingId;
        this.cmd.time = this.timerService.timeStamp( this.cmd.meeting , this.cmd.session ).minutes();
        let timer = this.timerService.timeStamp( this.meetingId, this.sessionId );
        this.timerService.bookTime( this.cmd.description , timer , () => {
            this.cmd = {};
        } );
    }

    public play(){
        this.init();
        this.timerService.startCall( this.meetingId , this.sessionId , () => {
            this.state = this.RUNNING;
        } );
    }

    public pause(){
        this.timerService.pause(this.sessionId,this.timer);
        this.state = this.PAUSE;
    }

    public reset(){
        this.timer.reset();
    }

    public combinedTime(){
        if (!this.timer) {
            return 0;
        }
        return this.timer.combinedTime();
    }


    get running(){
        if ( this.timer && this.timer.running ) {
            this.state = this.RUNNING;
            return true;
        }
        return false;
    }

    public diff(){
        if ( !this.timer ) {
            return '00h 00m';
        }
        return this.timer.diff();
    }


}

interface State{
    type: string;
    background: string;
    color: string;
    text: string;
    icon: string;
    action: () => void;

}
