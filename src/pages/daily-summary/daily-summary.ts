import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { RiskyEventsPage } from './../risky-events/risky-events';
import { SymptomsPage } from './../symptoms/symptoms';
import { WeekReportPage } from './../week-report/week-report';
import { ReportingAdherencePage } from './../reporting-adherence/reporting-adherence';



/**
 * Generated class for the DailySummaryPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-daily-summary',
  templateUrl: 'daily-summary.html',
})
export class DailySummaryPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DailySummaryPage');
  }
    
    openRisky(){
        this.navCtrl.push(RiskyEventsPage);
    }
    
       openSymptoms(){
        this.navCtrl.push(SymptomsPage);
    }
    
       openDiet(){
        this.navCtrl.push(ReportingAdherencePage);
    }

}
