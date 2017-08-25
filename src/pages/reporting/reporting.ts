import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ReportingAdherencePage } from './../reporting-adherence/reporting-adherence';
import { RiskyEventsPage } from './../risky-events/risky-events';
import { SymptomsPage } from './../symptoms/symptoms';
import { WeekReportPage } from './../week-report/week-report';
import { DailySummaryPage } from './../daily-summary/daily-summary';

/**
 * Generated class for the ReportingPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-reporting',
  templateUrl: 'reporting.html',
})
export class ReportingPage {

  static readonly ID_DIET_NON_COMPLIANCE = 1;
  static readonly ID_TREATMENT_NON_COMPLIANCE = 2;
  static readonly ID_RISKY_EVENT = 3;
  static readonly ID_SYMPTOMS = 4;
    static readonly ID_REPORTING_ADHERENCE = 5;
    static readonly ID_DAILY_SUMMARY = 6;
    static readonly ID_WEEK_REPORT = 7;
  items = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
      this.items = [
      {id: ReportingPage.ID_DIET_NON_COMPLIANCE, title: 'Diet Non-compliance', disabled: 0, scenarios: [1, 2, 3], special: 0},
      {id: ReportingPage.ID_TREATMENT_NON_COMPLIANCE, title: 'Treatment Non-compliance', disabled: 0, scenarios: [2, 3], special: 0},
      {id: ReportingPage.ID_RISKY_EVENT, title: 'Risky Events', disabled: 0, scenarios: [1, 2, 3], special: 1},
          {id: ReportingPage.ID_SYMPTOMS, title: 'Symptoms', disabled: 0, scenarios: [1, 2, 3], special: 1},
          {id: ReportingPage.ID_REPORTING_ADHERENCE, title: 'Reporting Adherence', disabled: 0, scenarios: [1, 2, 3], special: 1},
      {id: ReportingPage.ID_DAILY_SUMMARY, title: 'Daily Summary', disabled: 0, scenarios: [1, 2, 3], special: 1},
          {id: ReportingPage.ID_WEEK_REPORT, title: 'Week Report', disabled: 0, scenarios: [1, 2, 3], special: 1}
    ];

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReportingPage');
  }

  openReportingDetailPage(item) {
      
      switch (item.id) {
        case ReportingPage.ID_RISKY_EVENT:
       this.navCtrl.push(RiskyEventsPage);
       break;
         
        case ReportingPage.ID_REPORTING_ADHERENCE:
       this.navCtrl.push(ReportingAdherencePage);
       break;
      
        case ReportingPage.ID_SYMPTOMS:
       this.navCtrl.push(SymptomsPage);
       break;
       
        case ReportingPage.ID_WEEK_REPORT:
       this.navCtrl.push(WeekReportPage);
       break;
    
        case ReportingPage.ID_DAILY_SUMMARY:
       this.navCtrl.push(DailySummaryPage);
       break;
      
      
  }

}
}