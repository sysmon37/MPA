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

  protected date: string = '';
  protected startTime: string = '';
  protected endTime: string = '';
  protected title: string = ''
  protected action: any = null;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.action = this.navParams.get('action');
    this.date = moment(this.action.startTime).format('YYYY-MM-DD');
    this.startTime = moment(this.action.startTime).format('HH:mm');
    this.endTime = moment(this.action.endTime).format('HH:mm');
    this.title = this.action.title;
    this.action.title = '';
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ActionPlanReminderPage');
  }
}
