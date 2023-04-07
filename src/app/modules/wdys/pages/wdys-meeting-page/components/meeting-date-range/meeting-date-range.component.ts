import { Component, OnInit } from '@angular/core';
import {WdysMeetingPageComponent} from "../../wdys-meeting-page.component";

@Component({
  selector: 'wdys-meeting-date-range',
  templateUrl: './meeting-date-range.component.html',
  styleUrls: ['./meeting-date-range.component.scss']
})
export class MeetingDateRangeComponent implements OnInit {

  constructor(
      private root: WdysMeetingPageComponent
  ) { }

  ngOnInit(): void {
  }

  get meeting(){
      return this.root.meeting;
  }

}
