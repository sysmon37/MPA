import { Action } from './../../enums/enums';
import { DataProvider } from './../../providers/data/data';
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
  selector: 'page-barriers',
  templateUrl: 'barriers.html',
})
export class BarriersPage {

  protected items = [];
  
  constructor(public navCtrl: NavController, public navParams: NavParams, private dataService : DataProvider) {
    this.items = [
      {title: "I do not fully understand what my doctor, nurse or the people at my pharmacy have explained to me so far", action: "", targetPage: ""},
      {title: "I can not mention the names of my medicines and their scope without hesitation", action: "", targetPage: ""},
      {title: "I believe all medicines have adverse side effects and I should avoid taking medicines at all if possible", action: "", targetPage: ""},
      {title: "I feel basically healthy, therefore I am sometimes unsure whether I really have to take my medicines daily", action: "", targetPage: ""},
      {title: "I fail to take my medicines every day automatically at a fixed time or on fixed occasions", action: "Use basic techniques to create reminders (post-it notes, calendar, alerts, etc.) and to establish routine", hint: "Use action planning to define relevant alerts", targetPage: "ActionPlanCalendarPage"},
      {title: "Generally I often feel bad, and sometimes I feel discouraged and depressed", action: "", targetPage: ""},
      {title: "I really would need help on an everyday basis (and particularly related to my treatment with medicines), but I do not get any help", action: "Ask your provider about a social support group or a buddy who could provide tips", hint: "Read an interview with an engaged patient to learn about his experience", targetPage: ""},

      // {title: "Lack of positive reinforcement", disabled: 1, action: "Develop visuals reinforcing the positives of your behavior", targetPage: ""},
      // {title: "Inadequate support from family/friends", disabled: 1, action: "Meet to present expectations and scope of support", targetPage: ""},
      // {title: "Lack of routine", disabled: 0, action: "Use basic techniques to establish routine and to create reminders (post-it notes, calendar, alerts, etc.)", hint: "Use the calendar function to define relevant alerts", targetPage: "ActionPlanCalendarPage"},
      // {title: "Inadequate communication with a healthcare provider", disabled: 1, action: "Communicate your needs to the provider and develop communication strategy", targetPage: ""},
      // {title: "Insufficient understanding of treatment and required lifestyle changes", disabled: 1, action: "Discuss treatment with healthcare providers", targetPage: ""},
      // {title: "Lack of willpower", disabled: 0, action: "Identify personally meaningful reasons for changing behavior, seek out peer mentoring from a more engaged patient", hint: "Read an interview with an engaged patient", targetPage: "InterviewPage"},
      // {title: "Time commitment required for engaging and for using the app", disabled: 1, action: "Develop a time management strategy for daily activities", targetPage: ""}
    ];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BarriersToEngagementPage');
    this.dataService.addInvokedAction(Action.Barriers);
  }

  openItemDetailPage(item) {
    this.navCtrl.push("BarrierDetailPage", {item: item});
  }
}
