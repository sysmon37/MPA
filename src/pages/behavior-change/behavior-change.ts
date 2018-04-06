import { Action } from './../../enums/enums';
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
  protected highlighted = false;
  protected scenario;

  constructor(public navCtrl: NavController, public navParams: NavParams, private dataService: DataProvider) {
    this.items = [
      {title: 'Pros of Engagement', targetPage: "ProsPage", disabled: 0, scenarios: [1], special: 0},
      {title: 'Wellbeings', targetPage: "WellbeingPage", disabled: 0, scenarios: [1], special: 0},
      {id: Action.Barriers, title: 'Barriers to Engagement', targetPage: "BarriersPage", disabled: 0, scenarios: [2], special: 0},
      {id: Action.SelfReevaluation, title: 'Self-reevaluation', targetPage: "SelfReevaluationPage", disabled: 0, scenarios: [2], special: 0},
      {title: 'Action Plan', targetPage: "ActionPlanCalendarPage", disabled: 0, scenarios: [2, 3], special: 0}
    ];
    this.scenario = this.dataService.getScenario();
    console.log("Scenario = " + this.scenario);

    this.highlighted = this.navParams.get("highlighted") ? true : false;
    console.log("Highlighted = " + this.highlighted);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BehaviorChangePage');
    console.log("invoked actions = " + this.dataService.getInvokedActions());
  }

  openBehaviorChangeDetailPage(item) {
    this.navCtrl.push(item.targetPage);
  }

  color(item) {
    if (this.highlighted && item.id != null && this.dataService.getInvokedActions().indexOf(item.id) == -1)
      return "secondary";
    else
      return "primary";
  }
}
