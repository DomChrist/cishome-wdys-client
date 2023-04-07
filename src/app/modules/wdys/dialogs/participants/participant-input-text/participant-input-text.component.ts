import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ParticipantService} from "../../../services/participant.service";
import {Participant} from "../../../../../core/api/v1";

@Component({
  selector: 'wdys-participant-input-text',
  templateUrl: './participant-input-text.component.html',
  styleUrls: ['./participant-input-text.component.scss']
})
export class ParticipantInputTextComponent implements OnInit {

  private $selectedParticipants: Participant[];

    @Output("participants")
    public participantsChange: EventEmitter<Array<Participant>> = new EventEmitter<Array<Participant>>();

    private list: Participant[];


    constructor(
      private service: ParticipantService
  ) { }

  ngOnInit(): void {
      this.$selectedParticipants = new Array<Participant>();
      this.list = new Array<Participant>();
  }


  get selectedParticipants(){
      return this.$selectedParticipants;
  }

  set selectedParticipants( p: Participant[] ){
      this.$selectedParticipants = p;
  }

  get participantList(){
      return this.list;
  }

  public search(event){
      this.list = this.service.participants
          .filter( p => p.fullName.includes(event.query) );
  }

  public push( event: Participant[] ){
      this.participantsChange.emit( this.$selectedParticipants );
  }

    public firstLetter( l: string ){
        return l.charAt(0).toUpperCase();
    }

    @Input('currentParticipants')
    set currentParticipants( p: Array<Participant> ){
        this.$selectedParticipants = p;
    }

}
