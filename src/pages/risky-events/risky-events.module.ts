import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RiskyEventsPage } from './risky-events';

@NgModule({
  declarations: [
    RiskyEventsPage,
  ],
  imports: [
    IonicPageModule.forChild(RiskyEventsPage),
  ],
})
export class RiskyEventsPageModule {}
