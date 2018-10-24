import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import moment from 'moment';

/**
 * Generated class for the ActionPlanReminderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-action-plan-reminder',
  templateUrl: 'action-plan-reminder.html',
})
export class ActionPlanReminderPage {

  // protected date: string = '';
  protected startTime: string = '';
  // protected endTime: string = '';
  protected action: any = null;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.action = this.navParams.get('action');
    // console.log(this.action);
    // this.date = moment(this.action.startTime).format('YYYY-MM-DD');
    this.startTime = moment(this.action.startTime).format();
    // this.endTime = moment(this.action.endTime).format('HH:mm');
  }

  ionViewWillLeave(){
    console.log('ionViewWillLeave ActionPlanReminderPage');
    let numActions = this.action.items.filter(item => item != '').length;
    let numCompleted = this.action.values.filter(value => value == true).length;
    this.action.title = numActions + " mesure" + (numActions > 1 ? "s" : "") + ", réalisées à " + Math.round(numCompleted/numActions*100.0) +"%";
  }
}
