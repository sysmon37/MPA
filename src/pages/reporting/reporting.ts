import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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
  static readonly ID_DAILY_SUMMARY = 4;
  items = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
      this.items = [
      {id: ReportingPage.ID_DIET_NON_COMPLIANCE, title: 'Diet Non-compliance', disabled: 0, scenarios: [1, 2, 3], special: 0},
      {id: ReportingPage.ID_TREATMENT_NON_COMPLIANCE, title: 'Treatment Non-compliance', disabled: 0, scenarios: [2, 3], special: 0},
      {id: ReportingPage.ID_RISKY_EVENT, title: 'Risky Event', disabled: 0, scenarios: [1, 2, 3], special: 1},
      {id: ReportingPage.ID_DAILY_SUMMARY, title: 'Daily Summary', disabled: 0, scenarios: [1, 2, 3], special: 1}
    ];

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReportingPage');
  }

  openReportingDetailPage(item) {
  }

}
