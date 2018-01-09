import { NgCalendarModule } from 'ionic2-calendar';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ActionPlanCalendarPage } from './action-plan-calendar';


@NgModule({
  declarations: [
    ActionPlanCalendarPage,
  ],
  imports: [
    IonicPageModule.forChild(ActionPlanCalendarPage),
    NgCalendarModule
  ],
})
export class ActionPlanCalendarPageModule {}
