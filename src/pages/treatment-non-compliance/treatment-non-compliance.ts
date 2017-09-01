import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Treatment } from '../../enums/enums';

/**
 * Generated class for the TreatmentNonCompliancePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-treatment-non-compliance',
  templateUrl: 'treatment-non-compliance.html',
})
export class TreatmentNonCompliancePage {

  dateTime : string;
  treatment : string;
  // problem : string;
  // reason : string;

  items : any = [];
  values : string[] = [];
  canSubmit : boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.items = [
      {id: Treatment.Anticoagulant, title: 'Warfarin', description: 'Oral tablet, 5 mg, 1 x daily', imageUrl: '/assets/warfarin-5mg.jpg'},
      {id: Treatment.RateControl, title: 'Metoprolol', description: 'Oral tablet, 25 mg, 2 x daily', imageUrl: '/assets/metoprolol-25mg.jpg'}
    ];

    for (let i in this.items)
      this.values[i] = '0';
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TreatmentNonCompliancePage');
    this.dateTime = new Date().toISOString();
  }

  valueChanged() {
    this.canSubmit = false;
    for (let v of this.values)
      if (v != '0') {
        this.canSubmit = true;
        break;
      }
  }

  submit() {
    console.log(this.values);
    this.navCtrl.pop();

  }

}
