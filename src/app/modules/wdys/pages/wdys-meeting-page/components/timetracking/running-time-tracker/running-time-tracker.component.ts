import { Component, OnInit } from '@angular/core';
import {SessionStampTimer, SessionTimeTrackingService} from "../../../../../services/session-time-tracking.service";

@Component({
  selector: 'wdys-running-time-tracker',
  templateUrl: './running-time-tracker.component.html',
  styleUrls: ['./running-time-tracker.component.scss']
})
export class RunningTimeTrackerComponent implements OnInit {

    public tracker: SessionStampTimer;
    public collapsed = false;

    constructor( private timeService: SessionTimeTrackingService ) { }

    ngOnInit(): void {
        this.init();
        this.timeService.timerActionStream.subscribe( () => {
            this.init();
        });
    }

    private init(){
        this.tracker = this.timeService.current();
    }

    public toggler(event){
        this.collapsed = event['collapsed'];
    }

}
