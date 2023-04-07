import { Injectable } from '@angular/core';
import {CreateParticipantCommand, Participant, WdysParticipantService} from "../../../core/api/v1";
import {HttpResponse} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ParticipantService {
    private $participants: Participant[];

  constructor(
      private service: WdysParticipantService
  ) {
      this.reload();
  }

    private handleAll(value: HttpResponse<Participant[]>) {
        this.$participants = value.body;
    }

    public reload(){
        this.service.apiWdysParticipantQueryAllGet('response').subscribe({ next: value => this.handleAll(value)})
    }

    public createParticipant( cmd: CreateParticipantCommand , success?: () => void , error?: () => void ){
      this.service.apiWdysParticipantCmdNewPost( cmd , 'response').subscribe({
          next: value => {
              this.reload();
              if( success ) {
                  success();
              }
          },
          error: () => {
              if( error ){
                  error();
              }
          }
      })
    }

    get participants(){
      return this.$participants;
    }

    findById( id: string ){
      if( !this.$participants ){
          return null;
      }
      return this.$participants.filter( e => e.id === id )[0];
    }

}
