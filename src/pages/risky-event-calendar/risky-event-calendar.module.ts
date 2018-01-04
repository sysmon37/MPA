import { NgCalendarModule } from 'ionic2-calendar';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RiskyEventCalendarPage } from './risky-event-calendar';

@NgModule({
  declarations: [
    RiskyEventCalendarPage,
  ],
  imports: [
    IonicPageModule.forChild(RiskyEventCalendarPage),
    NgCalendarModule
  ],
})
export class RiskyEventCalendarPageModule {}
