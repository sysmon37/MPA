import { WeeklySummaryPage } from './../weekly-summary/weekly-summary';
import { TreatmentNonCompliancePage } from './../treatment-non-compliance/treatment-non-compliance';
import { DietNonCompliancePage } from './../diet-non-compliance/diet-non-compliance';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { RiskyEventsPage } from './../risky-events/risky-events';
import { SymptomsPage } from './../symptoms/symptoms';
import { DailySummaryPage } from './../daily-summary/daily-summary';

import { Report } from '../../enums/enums';

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

  itemGroups = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.itemGroups = [
      { 
        title: 'Diet and Medication Non-compliance', 
        items: [      
          {id: Report.DietNonCompliance, title: 'Diet Non-compliance', disabled: 0, scenarios: [1, 2, 3], special: 0},
          {id: Report.TreatmentNonCompliance, title: 'Medication Non-compliance', disabled: 0, scenarios: [2, 3], special: 0}
        ]
      },
      {
        title: 'Symptoms and Risky Events',
        items: [
          {id: Report.Symptoms, title: 'Symptoms', disabled: 0, scenarios: [1, 2, 3], special: 0},
          {id: Report.RiskyEvents, title: 'Risky Events', disabled: 0, scenarios: [1, 2, 3], special: 0}    
        ]
      },
      {
        title: 'Daily and Weekly Summaries',
        items: [
          {id: Report.DailySummary, title: 'Daily Summary', disabled: 0, scenarios: [1, 2, 3], special: 1},
          {id: Report.WeeklySummary, title: 'Weekly Summary', disabled: 0, scenarios: [1, 2, 3], special: 1}    
        ]
      }
    ];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReportingPage');
  }

  openReportingDetailPage(item) {
      
      switch (item.id) {
        case Report.RiskyEvents:
          this.navCtrl.push(RiskyEventsPage);
        break;         
        case Report.DietNonCompliance:
          this.navCtrl.push(DietNonCompliancePage);
          break;
        case Report.TreatmentNonCompliance:
          this.navCtrl.push(TreatmentNonCompliancePage);
          break;
        case Report.Symptoms:
          this.navCtrl.push(SymptomsPage);
          break;
        case Report.WeeklySummary:
          this.navCtrl.push(WeeklySummaryPage);
          break;
        case Report.DailySummary:
          this.navCtrl.push(DailySummaryPage);
          break;
  }

}
}