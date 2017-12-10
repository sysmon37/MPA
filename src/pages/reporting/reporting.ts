import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';

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

  protected itemGroups = [];
  protected scenario;

  constructor(public navCtrl: NavController, public navParams: NavParams, private dataService: DataProvider) {
    this.itemGroups = [
      { 
        title: 'Compliance', 
        items: [      
          {title: 'Diet Compliance', targetPage: "DietNonCompliancePage", disabled: 0, scenarios: [2], special: 0},
          {title: 'Treatment Compliance', targetPage: "TreatmentNonCompliancePage", disabled: 0, scenarios: [2], special: 0}
        ],
        scenarios: [2]
      },
      {
        title: 'Symptoms and Risky Events',
        items: [
          {title: 'Symptoms', disabled: 0, targetPage: "SymptomsPage", scenarios: [2], special: 0},
          {title: 'Risky Events', disabled: 0, targetPage: "RiskyEventsPage", scenarios: [2], special: 0}    
        ],
        scenarios: [2]
      },
      {
        title: 'Summaries',
        items: [
          {title: 'Daily Summary', disabled: 0, targetPage: "DailySummaryPage", scenarios: [2], special: 0},
          {title: 'Weekly Summary', disabled: 0, targetPage: "WeeklySummaryPage", scenarios: [3], special: 1}    
        ],
        scenarios: [2, 3]
      },
      {
        title: 'Goal Achievement',
        items: [
          {title: 'Pursued and Achieved Goals', disabled: 0, targetPage: "GoalAchievedPage", scenarios: [3], special: 1},
        ],
        scenarios: [3]
      }

    ];
    this.scenario = this.dataService.getScenario();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReportingPage');
  }

  openReportingDetailPage(item) {
    this.navCtrl.push(item.targetPage);
  }

}