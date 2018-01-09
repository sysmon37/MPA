import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RiskyEventPage } from './risky-event';

@NgModule({
  declarations: [
    RiskyEventPage,
  ],
  imports: [
    IonicPageModule.forChild(RiskyEventPage),
  ],
})
export class RiskyEventPageModule {}
