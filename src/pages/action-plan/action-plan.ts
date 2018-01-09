import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import moment from 'moment';

/**
 * Generated class for the ActionPlanPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-action-plan',
  templateUrl: 'action-plan.html',
})
export class ActionPlanPage {

  protected startTime = null;
  protected endTime = null;
  protected action: any = null;

  constructor(public navCtrl: NavController, public navParams: NavParams) { 
    this.action = this.navParams.get('action');
    this.startTime = moment(this.action.startTime).format();
    this.endTime = moment(this.action.endTime).format();  
    console.log("start = " + this.startTime + " end = " + this.endTime);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ActionPlanPage');
  }

  ionViewWillUnload(){
    // moment(localDateString).toISOString(); 
    this.action.startTime = new Date(moment(this.startTime).toISOString());
    this.action.endTime = new Date(moment(this.endTime).toISOString());
  }

  trackByIndex(index, value) {
    return index;
  }

}
