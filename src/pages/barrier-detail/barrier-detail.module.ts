import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BarrierDetailPage } from './barrier-detail';

@NgModule({
  declarations: [
    BarrierDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(BarrierDetailPage),
  ],
})
export class BarrierDetailPageModule {}
