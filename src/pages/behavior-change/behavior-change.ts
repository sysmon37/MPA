import { DataProvider } from './../../providers/data/data';
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

  protected items = [];
  protected scenario;

  constructor(public navCtrl: NavController, public navParams: NavParams, private dataService: DataProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BehaviorChangePage');
    this.items = [
      {title: 'Pros of Engagement', targetPage: "ProsPage", disabled: 0, scenarios: [1], special: 0},
      {title: 'Barriers to Engagement', targetPage: "BarriersPage", disabled: 0, scenarios: [2], special: 0},
      {title: 'Self-reevaluation', targetPage: "SelfReevaluationPage", disabled: 0, scenarios: [2], special: 0},
      {title: 'Action Plan', targetPage: "ActionPlanPage", disabled: 0, scenarios: [3], special: 1}
    ];
    this.scenario = this.dataService.getScenario();
    console.log("Scenario = " + this.scenario);
  }

  openBehaviorChangeDetailPage(item) {
    this.navCtrl.push(item.targetPage);
  }
}
