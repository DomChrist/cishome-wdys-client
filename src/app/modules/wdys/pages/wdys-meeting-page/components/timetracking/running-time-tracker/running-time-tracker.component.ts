import { Component, OnInit } from '@angular/core';
import {SessionStampTimer, SessionTimeTrackingService} from "../../../../../features/timetracking/services/session-time-tracking.service";

@Component({
  selector: 'wdys-running-time-tracker',
  templateUrl: './running-time-tracker.component.html',
  styleUrls: ['./running-time-tracker.component.scss']
})
export class RunningTimeTrackerComponent implements OnInit {

    public tracker: SessionStampTimer;
    public collapsed = false;

    constructor( private timeService: SessionTimeTrackingService ) {
        this.timeService.timerActionStream.subscribe( () => {
            this.init();
        });
    }

    ngOnInit(): void {
        this.init();
    }

    private init(){
        this.tracker = this.timeService.current();
    }

    public toggler(event){
        this.collapsed = event['collapsed'];
    }

}
