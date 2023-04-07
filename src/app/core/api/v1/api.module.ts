import { NgModule, ModuleWithProviders, SkipSelf, Optional } from '@angular/core';
import { Configuration } from './configuration';
import { HttpClient } from '@angular/common/http';

import { AccountResourceService } from './api/accountResource.service';
import { DriveService } from './api/drive.service';
import { HouseholdContractsService } from './api/householdContracts.service';
import { KeyGenWebAdapterService } from './api/keyGenWebAdapter.service';
import { ListCommonService } from './api/listCommon.service';
import { ListShoppingService } from './api/listShopping.service';
import { ListShoppingSettlementService } from './api/listShoppingSettlement.service';
import { ListShoppingStoreService } from './api/listShoppingStore.service';
import { ListTodoService } from './api/listTodo.service';
import { ProfileService } from './api/profile.service';
import { SafeService } from './api/safe.service';
import { SchoolService } from './api/school.service';
import { ShoppingListQueryResourceService } from './api/shoppingListQueryResource.service';
import { WdysCollaborationService } from './api/wdysCollaboration.service';
import { WdysDashboardService } from './api/wdysDashboard.service';
import { WdysMeetingService } from './api/wdysMeeting.service';
import { WdysMeetingsessionQueryService } from './api/wdysMeetingsessionQuery.service';
import { WdysNotesService } from './api/wdysNotes.service';
import { WdysParticipantService } from './api/wdysParticipant.service';
import { WdysSessionService } from './api/wdysSession.service';
import { WdysTimebookingService } from './api/wdysTimebooking.service';
import { WdysTodoService } from './api/wdysTodo.service';
import { WeekplanPlanService } from './api/weekplanPlan.service';
import { WeekplanTasksService } from './api/weekplanTasks.service';
import { WeekplanTeamService } from './api/weekplanTeam.service';

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
