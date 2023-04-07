import { Component, OnInit } from '@angular/core';
import {WdysDashboardPageComponent} from "../../wdys-dashboard-page.component";
import {WdysRoutingService} from "../../../../services/wdys-routing.service";

@Component({
  selector: 'app-wdys-dashboard-todos',
  templateUrl: './wdys-dashboard-todos.component.html',
  styleUrls: ['./wdys-dashboard-todos.component.scss']
})
export class WdysDashboardTodosComponent implements OnInit {

  constructor(
      public root: WdysDashboardPageComponent,
      public router: WdysRoutingService
  ) { }

  ngOnInit(): void {
  }



}
