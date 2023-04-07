import { Component, OnInit } from '@angular/core';
import {Meeting, MeetingProjection, WdysMeetingService} from "../../../../core/api/v1";
import {Router} from "@angular/router";
import {WdysRoutingService} from "../../services/wdys-routing.service";

@Component({
  selector: 'wdys-search-input',
  templateUrl: './wdys-search-input.component.html',
  styleUrls: ['./wdys-search-input.component.scss']
})
export class WdysSearchInputComponent implements OnInit {

  public actionResults: ({ search: string; action: () => Promise<boolean>; label: string } | { search: string; action: () => boolean; label: string })[];
  public meetingResult: Array<MeetingProjection>;

  public toggleCreateParticipantDialog = false;

    public $actions: ({ search: string; action: () => Promise<boolean>; label: string } | { search: string; action: () => boolean; label: string })[];



  constructor(
      private meeting: WdysMeetingService,
      private routing: Router,
      private router: WdysRoutingService
  ) { }

  ngOnInit(): void {
      this.$actions = [
          { label: 'Create Meeting' , search: 'create meeting' , action: () => this.router.createMeeting() },
          { label: 'Create Participant' , search: 'create participant teilnehmer' , action: () => this.toggleCreateParticipantDialog = true }
      ];
  }

  public search( event, query: string ){
      if( query && query.length >= 3 ){
          this.meeting.apiMeetingQuerySearchGet( query , 'response').subscribe( {
              next: (resp) => {
                  this.meetingResult = resp.body;
              }
          });
      }

      this.actionResults = this.$actions.filter( a => {
          console.log(a.search);
          const s: string = a.search;
          return s.toLowerCase().includes( query.toLowerCase());
      });
  }


  public openMeeting( id: string){
      this.router.toMeeting(id);
  }

  public startAction( action: () => void ){
      action();
  }

    startSearch($event: KeyboardEvent, value: string) {
        this.search($event,value);
    }
}
