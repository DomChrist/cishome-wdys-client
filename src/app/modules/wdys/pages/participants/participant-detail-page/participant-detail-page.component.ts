import { Component, OnInit } from '@angular/core';
import {ParticipantService} from "../../../services/participant.service";
import {ActivatedRoute} from "@angular/router";
import {Participant} from "../../../../../core/api/v1";

@Component({
  selector: 'wdys-participant-detail-page',
  templateUrl: './participant-detail-page.component.html',
  styleUrls: ['./participant-detail-page.component.scss']
})
export class ParticipantDetailPageComponent implements OnInit {

  private $participantId;

  private $selected: Participant;

  constructor(
      private service: ParticipantService,
      private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
      this.$participantId = this.activatedRoute.snapshot.paramMap.get('id');
      this.$selected = this.service.findById( this.$participantId );
  }


  get selected(){
      if( !this.$selected ){
          this.$selected = this.service.findById( this.$participantId );
      }
      return this.$selected;
  }

}
