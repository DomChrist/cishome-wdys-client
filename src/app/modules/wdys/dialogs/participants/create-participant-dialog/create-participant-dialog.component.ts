import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CreateParticipantCommand} from "../../../../../core/api/v1";
import {ParticipantService} from "../../../services/participant.service";
import {MessageService} from "primeng/api";

@Component({
  selector: 'wdys-create-participant-dialog',
  templateUrl: './create-participant-dialog.component.html',
  styleUrls: ['./create-participant-dialog.component.scss']
})
export class CreateParticipantDialogComponent implements OnInit {

    @Input()
    public visible = false;
    @Output()
    public visibleChange: EventEmitter<boolean> = new EventEmitter();

    public cmd: CreateParticipantCommand = {};


    constructor( private domain: ParticipantService, private message: MessageService) { }

    ngOnInit(): void {
    }

    public predictMail(){
        let mail = '';
        if( this.cmd.firstName ){
            mail = this.formatName( this.cmd.firstName );
        }
        if( this.cmd.lastName ){
            mail = mail + '.' + this.formatName( this.cmd.lastName ) + '@';
        }
        this.cmd.mail = mail;
    }

    private formatName( name: string ){
        name = name.replace("ä" , "ae")
            .replace("ö","oe")
            .replace("ü","ue")
            .replace("Ä","Ae")
            .replace("Ü","Ue")
            .replace("Ö","Oe")
            .replace("ß","s")
            .toLowerCase();
        return name;
    }

    public save(){
        this.domain.createParticipant( this.cmd , () => {
            this.message.add( {severity: 'success' , summary: ' Particpant created '} )
        } , () => {
            this.message.add( {severity: 'error' , summary: 'Particpant could not be created '} );
        });
    }


}
