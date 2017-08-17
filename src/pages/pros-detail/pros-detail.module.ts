import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProsDetailPage } from './pros-detail';

@NgModule({
  declarations: [
    ProsDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(ProsDetailPage),
  ],
})
export class ProsDetailPageModule {}
