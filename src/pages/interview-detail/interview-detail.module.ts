import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InterviewDetailPage } from './interview-detail';

@NgModule({
  declarations: [
    InterviewDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(InterviewDetailPage),
  ],
})
export class InterviewDetailsPageModule {}
