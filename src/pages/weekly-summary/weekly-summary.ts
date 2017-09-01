import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the WeeklySummaryPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-weekly-summary',
  templateUrl: 'weekly-summary.html',
})
export class WeeklySummaryPage {

  items = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.items = [
      {title: 'Compliance Scores', color: 'custom_1'},
      {title: 'Medication Compliance', color: 'custom_2'},
      {title: 'Diet Compliance', color: 'custom_3'},
      {title: 'Engagement Actions', color: 'custom_4'},
    ];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WeeklySummaryPage');
  }

}
