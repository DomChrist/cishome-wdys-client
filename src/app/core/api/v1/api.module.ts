import { NgModule, ModuleWithProviders, SkipSelf, Optional } from '@angular/core';
import { Configuration } from './configuration';
import { HttpClient } from '@angular/common/http';

import { WdysCollaborationService } from './api/wdysCollaboration.service';
import { WdysDashboardService } from './api/wdysDashboard.service';
import { WdysMeetingService } from './api/wdysMeeting.service';
import { WdysMeetingsessionQueryService } from './api/wdysMeetingsessionQuery.service';
import { WdysNotesService } from './api/wdysNotes.service';
import { WdysParticipantService } from './api/wdysParticipant.service';
import { WdysSessionService } from './api/wdysSession.service';
import { WdysTimebookingService } from './api/wdysTimebooking.service';
import { WdysTodoService } from './api/wdysTodo.service';

@NgModule({
  imports:      [],
  declarations: [],
  exports:      [],
  providers: []
})
export class ApiModule {
    public static forRoot(configurationFactory: () => Configuration): ModuleWithProviders<ApiModule> {
        return {
            ngModule: ApiModule,
            providers: [ { provide: Configuration, useFactory: configurationFactory } ]
        };
    }

    constructor( @Optional() @SkipSelf() parentModule: ApiModule,
                 @Optional() http: HttpClient) {
        if (parentModule) {
            throw new Error('ApiModule is already loaded. Import in your base AppModule only.');
        }
        if (!http) {
            throw new Error('You need to import the HttpClientModule in your AppModule! \n' +
            'See also https://github.com/angular/angular/issues/20575');
        }
    }
}
