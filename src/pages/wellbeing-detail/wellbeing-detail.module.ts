import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WellbeingDetailPage } from './wellbeing-detail';

@NgModule({
  declarations: [
    WellbeingDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(WellbeingDetailPage),
  ],
})
export class WellbeingDetailPageModule {}
