import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { BehaviorChange } from '../../enums/enums';

/**
 * Generated class for the BehaviorChangePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-behavior-change',
  templateUrl: 'behavior-change.html',
})
export class BehaviorChangePage {

  static readonly ID_EXPLORE = 1;
  static readonly ID_OTHER = 2;
  items = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BehaviorChangePage');
    this.items = [
      {id: BehaviorChange.ProsOfEngagement, title: 'Pros of Engagement', disabled: 0, scenarios: [1, 2, 3], special: 0},
      {id: BehaviorChange.BarriersToEngagement, title: 'Barriers to Engagement', disabled: 0, scenarios: [2], special: 1},
      {id: BehaviorChange.SelfReevaluation, title: 'Self-reevaluation', disabled: 0, scenarios: [2], special: 1}
    ];

  }

  openBehaviorChangeDetailPage(item) {
    switch (item.id) {
      case BehaviorChange.ProsOfEngagement:
        this.navCtrl.push("ProsPage");
        break;
      case BehaviorChange.BarriersToEngagement:
        this.navCtrl.push("BarriersToEngagementPage");
        break;
      case BehaviorChange.SelfReevaluation:
      this.navCtrl.push("SelfReevaluationPage");
    }
  }

}
