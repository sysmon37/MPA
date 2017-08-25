import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { EducationPage } from './../education/education';
import { BehaviorChangePage} from './../behavior-change/behavior-change';
import { ReportingPage } from './../reporting/reporting';
import { SlidesPage } from './../slides/slides';



EducationPage
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  
  openEducationPage() {
    this.navCtrl.push(EducationPage);
  }

  openBehaviorChangePage() {
    this.navCtrl.push(BehaviorChangePage);
  }

  openReportingPage() {
    this.navCtrl.push(ReportingPage);
  }
    
   
}
