import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DailySummaryPage } from './daily-summary';

@NgModule({
  declarations: [
    DailySummaryPage,
  ],
  imports: [
    IonicPageModule.forChild(DailySummaryPage),
  ],
})
export class DailySummaryPageModule {}
