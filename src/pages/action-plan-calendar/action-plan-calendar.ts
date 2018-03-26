import { DataProvider } from './../../providers/data/data';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { CalendarComponent } from 'ionic2-calendar/calendar';
import { ViewChild } from '@angular/core';
import moment from 'moment';

/**
 * Generated class for the ActionPlanCalendarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-action-plan-calendar',
  templateUrl: 'action-plan-calendar.html',
})
export class ActionPlanCalendarPage {
  @ViewChild(CalendarComponent) protected calendar;

  protected actions = [];
  protected calendarMode = 'month';
  protected todayDate = new Date();
  protected selectedDate = null;
  protected editedAction = null;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, protected dataService: DataProvider, private alertCtrl: AlertController) {
    this.todayDate.setHours(0, 0, 0, 0);
    this.selectedDate = new Date(this.todayDate);
    this.actions = this.dataService.getPlanActions();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ActionPlanCalendarPage');
  }

  ionViewWillEnter() {
    console.log('ionViewWillEnter ActionPlanCalendarPage');

    if (this.editedAction != null) {
      console.log(this.editedAction);
      if (!this.editedAction.isNew) {
        this.actions = this.actions.filter((value, index, array) => value.title != '');
      } else if (this.editedAction.title != '') {
        this.actions.push(this.editedAction);
        this.editedAction.isNew = false;
      }
      this.dataService.setPlanActions(this.actions);
      this.calendar.loadEvents();      
      console.log(this.actions);
    }
    // check for any pending/active actions
    let anyPending = false;
    for (let action of this.actions) 
      for (let i in action.items) 
        if (action.items[i] != '' && !action.values[i]) {
          anyPending = true;
          break;
        }

    if (!anyPending) {
      let alert = this.alertCtrl.create({
        title: 'Add Actions',
        subTitle: 'There are no actions or all defined actions have been completed. Please add new actions in order to get going with your action plan.',
        buttons: ['OK']
      });
      alert.present();  
    }    
  }

  onAddAction() {
    //startTime.setHours(11, 0, 0, 0);
    // let endTime = new Date(startTime);
    let startTime = new Date(this.selectedDate);
    let now = moment();
    startTime.setHours(now.hour(), now.minute(), 0, 0);
    let duration = 5;
    let endTime = moment(startTime).add(duration, 'minutes').toDate();
    // endTime.setHours(13, 0, 0, 0);

    this.editedAction = {
      allDay: false,
      title: '',
      startTime: startTime,
      duration: duration,
      endTime: endTime,
      items: ['', '', '', '', ''],
      values: [false, false, false, false, false],
      notes: '',
      isNew: true
    };
    console.log(this.editedAction);
    this.navCtrl.push("ActionPlanPage", {action: this.editedAction});
  }

  /**onActionSelected(event) {
    console.log("Action selected = " + event.title);
    this.editedAction = event;
    this.navCtrl.push("ActionPlanPage", {action: this.editedAction});
  }
*/
  onActionSelected(event) {
    console.log("Action selected = " + event.title);
    this.editedAction = event;
    this.navCtrl.push("ActionPlanReminderPage", {action: this.editedAction});
  }

  onDateChanged(event) {
    // event.setHours(0, 0, 0, 0); 
    this.selectedDate = event;
  }

  onTestReminder() {
    let i = Math.floor(Math.random()*this.actions.length);
    this.editedAction = this.actions[i];
    this.navCtrl.push("ActionPlanReminderPage", {action: this.editedAction});
  }

  markDisabled = (date) => {
    date.setHours(0, 0, 0, 0);
    return date < this.todayDate;
  };

}
