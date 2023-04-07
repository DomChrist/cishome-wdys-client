import { Component, OnInit } from '@angular/core';
import {WdysMeetingPageComponent} from "../../wdys-meeting-page.component";

@Component({
  selector: 'wdys-meeting-activities',
  templateUrl: './meeting-activities.component.html',
  styleUrls: ['./meeting-activities.component.scss']
})
export class MeetingActivitiesComponent implements OnInit {

  constructor(
      private root: WdysMeetingPageComponent
  ) { }

  ngOnInit(): void {
  }


  get latestFive(){
      return this.root.activities?.slice(0,5);
  }

}
