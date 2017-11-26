import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GoalAchievedPage } from './goal-achieved';

@NgModule({
  declarations: [
    GoalAchievedPage,
  ],
  imports: [
    IonicPageModule.forChild(GoalAchievedPage),
  ],
})
export class GoalAchievedPageModule {}
