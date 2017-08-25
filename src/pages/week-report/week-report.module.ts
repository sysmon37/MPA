import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WeekReportPage } from './week-report';

@NgModule({
  declarations: [
    WeekReportPage,
  ],
  imports: [
    IonicPageModule.forChild(WeekReportPage),
  ],
})
export class WeekReportPageModule {}
