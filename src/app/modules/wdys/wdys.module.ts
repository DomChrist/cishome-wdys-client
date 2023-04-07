import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WdysDashboardPageComponent } from './pages/wdys-dashboard-page/wdys-dashboard-page.component';
import {WdysRoutingModule} from "./wdys.routes";
import { WdysMeetingPageComponent } from './pages/wdys-meeting-page/wdys-meeting-page.component';
import { WdysSessionPageComponent } from './pages/wdys-meeting-page/subpages/wdys-session-page/wdys-session-page.component';
import { WdysMeetingViewComponent } from './pages/wdys-meeting-page/subpages/wdys-meeting-view/wdys-meeting-view.component';
import {TableModule} from "primeng/table";
import {ButtonModule} from "primeng/button";
import {ProgressBarModule} from "primeng/progressbar";
import {PanelModule} from "primeng/panel";
import {AvatarGroupModule} from "primeng/avatargroup";
import {AvatarModule} from "primeng/avatar";
import {TooltipModule} from "primeng/tooltip";
import {CardModule} from "primeng/card";
import {DividerModule} from "primeng/divider";
import {ChipModule} from "primeng/chip";
import { MeetingSessionListComponent } from './pages/wdys-meeting-page/components/meeting-session-list/meeting-session-list.component';
import {CheckboxModule} from "primeng/checkbox";
import {TimelineModule} from "primeng/timeline";
import { MeetingDateRangeComponent } from './pages/wdys-meeting-page/components/meeting-date-range/meeting-date-range.component';
import {TabViewModule} from "primeng/tabview";
import {InputTextareaModule} from "primeng/inputtextarea";
import {FormsModule} from "@angular/forms";
import { SessionNoteComponent } from './pages/wdys-meeting-page/components/session-note/session-note.component';
import {SkeletonModule} from "primeng/skeleton";
import {DialogModule} from "primeng/dialog";
import { CreateSessionNoteComponent } from './pages/wdys-meeting-page/components/create-session-note/create-session-note.component';
import {MessagesModule} from "primeng/messages";
import {ToastModule} from "primeng/toast";
import {EditorModule} from "primeng/editor";
import { SessionTodoComponent } from './pages/wdys-meeting-page/components/session-todo/session-todo.component';
import {CalendarModule} from "primeng/calendar";
import {InputTextModule} from "primeng/inputtext";
import { TimeTrackingButtonComponent } from './pages/wdys-meeting-page/components/timetracking/time-tracking-button/time-tracking-button.component';
import { SessionTimeTrackingComponent } from './pages/wdys-meeting-page/components/timetracking/session-time-tracking/session-time-tracking.component';
import { RunningTimeTrackerComponent } from './pages/wdys-meeting-page/components/timetracking/running-time-tracker/running-time-tracker.component';
import { MeetingTodoViewComponent } from './pages/wdys-meeting-page/components/meeting-todo-view/meeting-todo-view.component';
import { ShareSessionButtonComponent } from './pages/wdys-meeting-page/components/share-session-button/share-session-button.component';
import {OverlayPanelModule} from "primeng/overlaypanel";
import { WdysCreateMeetingPageComponent } from './pages/wdys-create-meeting-page/wdys-create-meeting-page.component';
import {AccordionModule} from "primeng/accordion";
import { WdysSearchInputComponent } from './components/wdys-search-input/wdys-search-input.component';
import { WdysCollaborationPageComponent } from './pages/wdys-collaboration-page/wdys-collaboration-page.component';
import { WdysParticipantPageComponent } from './pages/participants/wdys-participant-page/wdys-participant-page.component';
import { CreateParticipantDialogComponent } from './dialogs/participants/create-participant-dialog/create-participant-dialog.component';
import { ParticipantDetailPageComponent } from './pages/participants/participant-detail-page/participant-detail-page.component';
import { WdysParticipantDetailNoteComponent } from './pages/participants/participant-detail-page/wdys-participant-detail-note/wdys-participant-detail-note.component';
import { WdysParticipantDetailSessionsComponent } from './pages/participants/participant-detail-page/wdys-participant-detail-sessions/wdys-participant-detail-sessions.component';
import { WdysDashboardTodosComponent } from './pages/wdys-dashboard-page/components/wdys-dashboard-todos/wdys-dashboard-todos.component';
import { WdysDashboardMostCommunicationTableComponent } from './pages/wdys-dashboard-page/components/wdys-dashboard-most-communication-table/wdys-dashboard-most-communication-table.component';
import { WdysDashboardLatestActivityComponent } from './pages/wdys-dashboard-page/components/wdys-dashboard-latest-activity/wdys-dashboard-latest-activity.component';
import {TagModule} from "primeng/tag";
import {BadgeModule} from "primeng/badge";
import { MeetingActivitiesComponent } from './pages/wdys-meeting-page/components/meeting-activities/meeting-activities.component';
import { SessionDescriptionPanelComponent } from './pages/wdys-meeting-page/components/session-description-panel/session-description-panel.component';
import { CreateSessionDialogComponent } from './dialogs/session/create-session-dialog/create-session-dialog.component';
import { ParticipantInputTextComponent } from './dialogs/participants/participant-input-text/participant-input-text.component';
import {AutoCompleteModule} from "primeng/autocomplete";
import { DeleteSessionButtonComponent } from './components/session/delete-session-button/delete-session-button.component';
import { ParticipantSelectDialogComponent } from './dialogs/participants/participant-select-dialog/participant-select-dialog.component';
import { SessionParticipantTableComponent } from './pages/wdys-meeting-page/components/session-participant-table/session-participant-table.component';
import {InplaceModule} from "primeng/inplace";
import { MeetingMenuButtonComponent } from './pages/wdys-meeting-page/components/meeting-menu-button/meeting-menu-button.component';



@NgModule({
    declarations: [
        WdysDashboardPageComponent,
        WdysMeetingPageComponent,
        WdysSessionPageComponent,
        WdysMeetingViewComponent,
        MeetingSessionListComponent,
        MeetingDateRangeComponent,
        SessionNoteComponent,
        CreateSessionNoteComponent,
        SessionTodoComponent,
        TimeTrackingButtonComponent,
        SessionTimeTrackingComponent,
        RunningTimeTrackerComponent,
        MeetingTodoViewComponent,
        ShareSessionButtonComponent,
        WdysCreateMeetingPageComponent,
        WdysSearchInputComponent,
        WdysCollaborationPageComponent,
        WdysParticipantPageComponent,
        CreateParticipantDialogComponent,
        ParticipantDetailPageComponent,
        WdysParticipantDetailNoteComponent,
        WdysParticipantDetailSessionsComponent,
        WdysDashboardTodosComponent,
        WdysDashboardMostCommunicationTableComponent,
        WdysDashboardLatestActivityComponent,
        MeetingActivitiesComponent,
        SessionDescriptionPanelComponent,
        CreateSessionDialogComponent,
        ParticipantInputTextComponent,
        DeleteSessionButtonComponent,
        ParticipantSelectDialogComponent,
        SessionParticipantTableComponent,
        MeetingMenuButtonComponent
    ],
    exports: [
        WdysSearchInputComponent
    ],
    imports: [
        CommonModule,
        WdysRoutingModule,
        TableModule,
        ButtonModule,
        ProgressBarModule,
        PanelModule,
        AvatarGroupModule,
        AvatarModule,
        TooltipModule,
        CardModule,
        DividerModule,
        ChipModule,
        CheckboxModule,
        TimelineModule,
        TabViewModule,
        InputTextareaModule,
        FormsModule,
        SkeletonModule,
        DialogModule,
        MessagesModule,
        ToastModule,
        EditorModule,
        CalendarModule,
        InputTextModule,
        OverlayPanelModule,
        AccordionModule,
        TagModule,
        BadgeModule,
        AutoCompleteModule,
        InplaceModule
    ]
})
export class WdysModule { }
