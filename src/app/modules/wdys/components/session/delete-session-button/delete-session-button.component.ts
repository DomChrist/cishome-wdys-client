import {Component, Input, OnInit} from '@angular/core';
import {WdysMeetingService} from "../../../../../core/api/v1";
import {MeetingViewEventBusService} from "../../../pages/wdys-meeting-page/services/meeting-view-event-bus.service";

@Component({
  selector: 'wdys-delete-session-button',
  templateUrl: './delete-session-button.component.html',
  styleUrls: ['./delete-session-button.component.scss']
})
export class DeleteSessionButtonComponent implements OnInit {

  @Input()
  public session: string;

  constructor(
      private service: WdysMeetingService,
      private eventBus: MeetingViewEventBusService
  ) { }

  ngOnInit(): void {
  }


  public delete(){
      this.service.apiMeetingSessionCmdSessionDelete( this.session ).subscribe(
          {
              next: value => {
                  this.eventBus.newSession();
              }
          }
      )
  }

}
