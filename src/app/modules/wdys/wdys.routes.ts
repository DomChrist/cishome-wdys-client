import { Routes, RouterModule } from '@angular/router';
import {ModuleWithProviders, NgModule} from '@angular/core';
import {WdysDashboardPageComponent} from "./pages/wdys-dashboard-page/wdys-dashboard-page.component";
import {WdysMeetingPageComponent} from "./pages/wdys-meeting-page/wdys-meeting-page.component";
import {
    WdysMeetingViewComponent
} from "./pages/wdys-meeting-page/subpages/wdys-meeting-view/wdys-meeting-view.component";
import {
    WdysSessionPageComponent
} from "./pages/wdys-meeting-page/subpages/wdys-session-page/wdys-session-page.component";
import {WdysCreateMeetingPageComponent} from "./pages/wdys-create-meeting-page/wdys-create-meeting-page.component";
import {AuthGuard} from "../../core/security/auth.guard";
import {WdysCollaborationPageComponent} from "./pages/wdys-collaboration-page/wdys-collaboration-page.component";
import {WdysParticipantPageComponent} from "./pages/participants/wdys-participant-page/wdys-participant-page.component";
import {
    ParticipantDetailPageComponent
} from "./pages/participants/participant-detail-page/participant-detail-page.component";

@NgModule({
    imports: [
        RouterModule.forChild([
            {path: '' , component: WdysDashboardPageComponent , canActivate: [AuthGuard]},
            {path: 'participants' , component: WdysParticipantPageComponent , canActivate: [AuthGuard]},
            {path: 'participants/:id' , component: ParticipantDetailPageComponent , canActivate: [AuthGuard]},
            {path: 'meetings/create' , component: WdysCreateMeetingPageComponent, canActivate: [AuthGuard]},
            {path: 'meetings/collaborate/session/:session' , component: WdysCollaborationPageComponent},
            {path: 'meetings/:meeting' , component: WdysMeetingPageComponent , canActivate: [AuthGuard], children:
                    [
                        {path: '' , component: WdysMeetingViewComponent},
                        {path: 'session' , component: WdysSessionPageComponent},
                        {path: 'session/:session' , component: WdysSessionPageComponent}

                    ]
            }
        ])
    ],
    exports: [RouterModule]
})
export class WdysRoutingModule {
}
