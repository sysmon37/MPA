import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BehaviorChangePage } from './behavior-change';

@NgModule({
  declarations: [
    BehaviorChangePage,
  ],
  imports: [
    IonicPageModule.forChild(BehaviorChangePage),
  ],
})
export class BehaviorChangePageModule {}
