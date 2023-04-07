import { Component, OnInit } from '@angular/core';
import {WdysDashboardPageComponent} from "../../wdys-dashboard-page.component";

@Component({
  selector: 'wdys-dashboard-most-communication-table',
  templateUrl: './wdys-dashboard-most-communication-table.component.html',
  styleUrls: ['./wdys-dashboard-most-communication-table.component.scss']
})
export class WdysDashboardMostCommunicationTableComponent implements OnInit {

  constructor(
      public root: WdysDashboardPageComponent
  ) { }

  ngOnInit(): void {
  }

}
