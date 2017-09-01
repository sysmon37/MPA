import { TreatmentNonCompliancePage } from './../treatment-non-compliance/treatment-non-compliance';
import { DietNonCompliancePage } from './../diet-non-compliance/diet-non-compliance';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { RiskyEventsPage } from './../risky-events/risky-events';
import { SymptomsPage } from './../symptoms/symptoms';



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

  wellbeing : number = 0;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DailySummaryPage');
  }
    
    reportRiskyEvent() {
        this.navCtrl.push(RiskyEventsPage);
    }
    
    reportSymptoms() {
        this.navCtrl.push(SymptomsPage);
    }
    
    reportDietNonCompliance() {
        this.navCtrl.push(DietNonCompliancePage);
    }

    reportTreatmentNonCompliance() {
        this.navCtrl.push(TreatmentNonCompliancePage);
    }

    submit() {
      this.navCtrl.pop();
      console.log("wellbeing: " + this.wellbeing);
    }

}
