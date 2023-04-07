import { Component, OnInit } from '@angular/core';
import {CreateMeetingCommand, Participant, WdysMeetingService, WdysParticipantService} from "../../../../core/api/v1";
import {Router} from "@angular/router";


@Component({
  selector: 'app-wdys-create-meeting-page',
  templateUrl: './wdys-create-meeting-page.component.html',
  styleUrls: ['./wdys-create-meeting-page.component.scss']
})
export class WdysCreateMeetingPageComponent implements OnInit {

    private $cmd: CreateMeetingCommand = {};
    private $participants: Participant[];
    public showCreateParticipantDialog = false;

    public step = 1;

    constructor(
        private router: Router,
        private meetingService: WdysMeetingService,
        private participantService: WdysParticipantService
    ) { }

    ngOnInit(): void {
        this.participantService.apiWdysParticipantQueryAllGet('body').subscribe( {next: value => this.$participants = value} )
    }

    get participants(){
        return this.$participants;
    }

    get cmd(){
        return this.$cmd;
    }

    public save(){
        this.meetingService.apiMeetingCmdNewPost( this.$cmd , 'response').subscribe({
            next: (resp) => {
                this.router.navigate( ['/wdys/meetings/' , resp.body.id ] );
            }
        });
    }

    public back(){
        this.router.navigate( ['/wdys'] );
    }

    add(event: Array<Participant>) {
        this.$cmd.participants = event;
    }


    get subject(){
        if( !this.cmd || !this.cmd.subject ){
            return 'SUBJECT';
        } else {
            return this.cmd.subject;
        }
    }

    get date(){
        if( this.cmd && this.cmd.meetingTime ){
            return this.$cmd.meetingTime;
        }
        return 'DATE';
    }

    handle($event: Array<Participant>) {
        this.$cmd.participants = $event;
    }
}
