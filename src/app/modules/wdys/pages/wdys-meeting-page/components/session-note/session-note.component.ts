import { Component, OnInit } from '@angular/core';
import {WdysSessionPageComponent} from "../../subpages/wdys-session-page/wdys-session-page.component";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'wdys-session-note',
  templateUrl: './session-note.component.html',
  styleUrls: ['./session-note.component.scss']
})
export class SessionNoteComponent implements OnInit {

  show_create_meeting_note = false;
    private selectedNote: string;

  constructor(
      private router: ActivatedRoute,
      public sessionView: WdysSessionPageComponent
  ) { }

  ngOnInit(): void {
        this.selectedNote = this.router.snapshot.queryParams['note'];
  }

}
