import { Component, OnInit } from '@angular/core';
import {Participant, WdysParticipantService} from "../../../../../core/api/v1";
import {ParticipantService} from "../../../services/participant.service";

@Component({
  selector: 'app-wdys-participant-page',
  templateUrl: './wdys-participant-page.component.html',
  styleUrls: ['./wdys-participant-page.component.scss']
})
export class WdysParticipantPageComponent implements OnInit {
    private $participants: Participant[];
    public createDialog = false;

  constructor(
      private service: ParticipantService,
  ) { }

  ngOnInit(): void {
  }

  public openCreateDialog(){
  }

    private handleAll(value: Participant[]) {
        this.$participants = value;
    }

    get participants(){
      return this.service.participants;
    }
}
