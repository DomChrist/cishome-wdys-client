import { Component, OnInit } from '@angular/core';
import { AppMainComponent } from './app.main.component';
import {WdysRoutingService} from "./modules/wdys/services/wdys-routing.service";
import {
    MeetingViewEventBusService
} from "./modules/wdys/pages/wdys-meeting-page/services/meeting-view-event-bus.service";
import {Meeting} from "./core/api/v1";

@Component({
    selector: 'app-menu',
    template: `
        <ul class="layout-menu">
            <li app-menuitem *ngFor="let item of model; let i = index;" [item]="item" [index]="i" [root]="true"></li>
            <li  *ngIf="recentMeeting" app-menuitem [item]="recentMeeting" (click)="routing.toMeeting(recentMeetingId)" [root]="true" ></li>
        </ul>
    `
})
export class AppMenuComponent implements OnInit {

    model: any[];

    public recentMeeting: any;
    public recentMeetingId: string;

    constructor(
        public app: AppMainComponent,
        public routing: WdysRoutingService,
        public meetingBus: MeetingViewEventBusService
    ) { }

    ngOnInit() {
        this.model = [
            {label: 'Dashboard', icon: 'pi pi-fw pi-home', routerLink: ['/']},
            {label: 'Participants', icon: 'pi pi-fw pi-users', routerLink: ['/wdys/participants']},
        ];


        this.meetingBus.meetingInitializedStream.subscribe( {
            next: (value: Meeting) => {
                this.recentMeetingId = value.id;
                this.recentMeeting = {label: 'Recent Meeting', icon: 'pi pi-arrow-back' };
            }
        } )
    }
}
