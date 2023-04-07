import { Component, OnInit } from '@angular/core';
import {WdysMeetingPageComponent} from "../../wdys-meeting-page.component";

@Component({
  selector: 'meeting-menu-button',
  templateUrl: './meeting-menu-button.component.html',
  styleUrls: ['./meeting-menu-button.component.scss']
})
export class MeetingMenuButtonComponent implements OnInit {

  public showActions = false;

  constructor(
      private root: WdysMeetingPageComponent
  ) { }

  ngOnInit(): void {
  }

  public newSession(){
      this.root.showCreateSessionDialog = !this.root.showCreateSessionDialog;
  }

  public delete(){
      this.root.delete();
  }

}
