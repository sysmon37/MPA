import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import moment from 'moment';

/**
 * Generated class for the GoalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-goal',
  templateUrl: 'goal.html',
})
export class GoalPage {

  protected deadline: string = '';
  protected goal: any = null;
  protected daysFromNow: number = 0;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl : AlertController) { 
    this.goal = this.navParams.get('goal');
    console.log("Goal: " + this.goal);
    this.deadline = moment(this.goal.deadline).format();   
    this.onDeadlineChange();
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad GoalPage');
  }

  ionViewWillLeave(){
    console.log('ionViewWillLeave GoalPage');
  }

  trackByIndex(index, value) {
    return index;
  }

  showGoalInfo() {
    let alert = this.alertCtrl.create({
      title: 'Possible Actions',
      subTitle: 'Examples of possible actions include: taking prescribed medications before or after meal, exercising or performing other physical activities, or reflecting before going to bed about how your engagement was that day.',
      buttons: ['OK']
    });
    alert.present();  
  }

  onDeadlineChange() {
    let diff = moment(this.deadline).diff(moment(), 'days');
    // this.daysFromNow = "(" + diff + " day" + (diff > 1 ? "s" : "") + " from now)";    
    this.daysFromNow = diff;
  }
}
