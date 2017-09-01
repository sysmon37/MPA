import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DietNonCompliancePage } from './diet-non-compliance';

@NgModule({
  declarations: [
    DietNonCompliancePage,
  ],
  imports: [
    IonicPageModule.forChild(DietNonCompliancePage),
  ],
})
export class DietNonCompliancePageModule {}
