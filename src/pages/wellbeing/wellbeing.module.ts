import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WellbeingPage } from './wellbeing';

@NgModule({
  declarations: [
    WellbeingPage,
  ],
  imports: [
    IonicPageModule.forChild(WellbeingPage),
  ],
})
export class WellbeingPageModule {}
