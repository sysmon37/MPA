import { ProsPage } from './../pros/pros';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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
      {id: BehaviorChangePage.ID_EXPLORE, title: 'Pros of Engagement', disabled: 0, scenarios: [1, 2, 3], special: 0},
      {id: BehaviorChangePage.ID_OTHER, title: 'Barriers to Engagement', disabled: 1, scenarios: [2, 3], special: 0},
      {id: BehaviorChangePage.ID_OTHER, title: 'Next Stage', disabled: 0, scenarios: [1, 2, 3], special: 1}
    ];

  }

  openBehaviorChangeDetailPage(item) {
    switch (item.id) {
      case BehaviorChangePage.ID_EXPLORE:
        this.navCtrl.push(ProsPage);
        break;
    }
  }

}
