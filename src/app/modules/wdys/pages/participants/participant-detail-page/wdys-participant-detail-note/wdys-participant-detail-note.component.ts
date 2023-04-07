import { Component, OnInit } from '@angular/core';
import {MeetingNote, WdysParticipantService} from "../../../../../../core/api/v1";
import {ParticipantDetailPageComponent} from "../participant-detail-page.component";

@Component({
  selector: 'app-wdys-participant-detail-note',
  templateUrl: './wdys-participant-detail-note.component.html',
  styleUrls: ['./wdys-participant-detail-note.component.scss']
})
export class WdysParticipantDetailNoteComponent implements OnInit {
    private $notes: MeetingNote[];

  constructor(
      private root: ParticipantDetailPageComponent,
      private service: WdysParticipantService
  ) { }

  ngOnInit(): void {
      this.service.apiWdysParticipantQueryParticipantParticipantNotesGet( this.root.selected.id ).subscribe( { next: value => this.handle(value)} )
  }

    private handle(value: any) {
        this.$notes = value;
    }

    get notes(): MeetingNote[]{
      return this.$notes;
    }
}
