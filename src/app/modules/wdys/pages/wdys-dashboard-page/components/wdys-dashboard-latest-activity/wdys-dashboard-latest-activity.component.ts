import { Component, OnInit } from '@angular/core';
import {WdysDashboardPageComponent} from "../../wdys-dashboard-page.component";

@Component({
  selector: 'wdys-dashboard-latest-activity',
  templateUrl: './wdys-dashboard-latest-activity.component.html',
  styleUrls: ['./wdys-dashboard-latest-activity.component.scss']
})
export class WdysDashboardLatestActivityComponent implements OnInit {

  constructor(
      public root: WdysDashboardPageComponent
  ) { }

  ngOnInit(): void {
  }

get latestFive(){
      return this.root.latestActivity?.slice(0,5);
}

}
