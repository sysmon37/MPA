import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the BarriersToEngagementPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-barriers-to-engagement',
  templateUrl: 'barriers-to-engagement.html',
})
export class BarriersToEngagementPage {

  protected items = [];
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.items = [
      {title: "Lack of positive reinforcement", disabled: 1, action: "Develop visuals reinforcing the positives of your behavior", targetPage: ""},
      {title: "Inadequate support from family/friends", disabled: 1, action: "Meet to present expectations and scope of support", targetPage: ""},
      {title: "Lack of routine", disabled: 0, action: "Use basic techniques to establish routine and to create reminders (post-it notes, calendar, alerts, etc.)", hint: "Use the calendar function to define relevant alerts", targetPage: "CalendarPage"},
      {title: "Inadequate communication with a healthcare provider", disabled: 1, action: "Communicate your needs to the provider and develop communication strategy", targetPage: ""},
      {title: "Insufficient understanding of treatment and required lifestyle changes", disabled: 1, action: "Discuss treatment with healthcare providers", targetPage: ""},
      {title: "Lack of willpower", disabled: 0, action: "Identify personally meaningful reasons for changing behavior, seek out peer mentoring from a more engaged patient", hint: "Read an interview with an engaged patient", targetPage: "InterviewPage"},
      {title: "Time commitment required for engaging and for using the app", disabled: 1, action: "Develop a time management strategy for daily activities", targetPage: ""}
    ];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BarriersToEngagementPage');
  }

  openItemDetailPage(item) {
    this.navCtrl.push("BarrierDetailPage", {item: item});
  }
}
