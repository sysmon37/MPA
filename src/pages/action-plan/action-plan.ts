import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
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

  protected startTime: string = '';
  protected endTime: string = '';
  protected action: any = null;
  protected timeNeeded: null;

  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl : AlertController) { 
    this.action = this.navParams.get('action');
    this.startTime = moment(this.action.startTime).format();
    this.endTime = moment(this.action.endTime).format();  
    
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ActionPlanPage');
  }

  ionViewWillLeave(){
    console.log('ionViewWillLeave ActionPlanPage');
    // moment(localDateString).toISOString(); 
    let m = moment(this.startTime);
    this.action.startTime = new Date(m.toISOString());
    this.action.endTime = new Date(m.add(this.action.duration, 'minutes').toISOString());

    let nonEmpty = this.action.items.filter((value, index, array) => value != '');
    for (let i in this.action.items) {
      this.action.items[i] = i < nonEmpty.length ? nonEmpty[i] : '';
      this.action.values[i] = false;
    }

    if (nonEmpty.length == 0)
      this.action.title = '';
    else
      this.action.title = nonEmpty.length + " action" + (nonEmpty.length > 1 ? "s" : "") + ", 0% completed"

    this.action.notes = '';
  }

  trackByIndex(index, value) {
    return index;
  }

  showActionInfo() {
    let alert = this.alertCtrl.create({
      title: 'Possible Actions',
      subTitle: 'Examples of possible actions include: taking prescribed medications before or after meal, exercising or performing other physical activities, or reflecting before going to bed about how your engagement was that day.',
      buttons: ['OK']
    });
    alert.present();  
  }

}
