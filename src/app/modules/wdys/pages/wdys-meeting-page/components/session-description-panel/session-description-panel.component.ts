import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {WdysSessionPageComponent} from "../../subpages/wdys-session-page/wdys-session-page.component";
import {
    UpdateSessionDescriptionCommand,
    WdysMeetingService,
    WdysNotesService,
    WdysSessionService
} from "../../../../../../core/api/v1";

@Component({
  selector: 'wdys-session-description-panel',
  templateUrl: './session-description-panel.component.html',
  styleUrls: ['./session-description-panel.component.scss']
})
export class SessionDescriptionPanelComponent implements OnInit {

  @Input()
  public value: string;

  @Output()
  private valueChange = new EventEmitter<string>();


  constructor(
      private session: WdysSessionPageComponent,
      private service: WdysMeetingService
  ) { }

  ngOnInit(): void {
  }

  public editDescription(){
        const r: UpdateSessionDescriptionCommand  = {

      };
        this.service.apiMeetingSessionCmdDescriptionPost()
  }

}
