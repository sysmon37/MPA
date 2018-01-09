import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CalendarComponent } from 'ionic2-calendar/calendar';
import { ViewChild } from '@angular/core';
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
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.todayDate.setHours(0, 0, 0, 0);
    this.selectedDate = new Date(this.todayDate);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ActionPlanCalendarPage');
  }

  ionViewWillEnter() {
    console.log('ionViewWillEnter ActionPlanCalendarPage');
    if (this.editedAction == null)
      return;

    if (!this.editedAction.isNew) {
      this.actions = this.actions.filter((value, index, array) => value.title != '');
    } else if (this.editedAction.title != '') {
      this.actions.push(this.editedAction);
      this.editedAction.isNew = false;
    }
    this.calendar.loadEvents();
    // this.dataService.setRiskyEvents(this.riskyEvents);
    console.log(this.actions);
  }

  onAddAction() {
    let startTime = new Date(this.selectedDate);
    let endTime = new Date(startTime);
    startTime.setHours(12, 0, 0, 0);
    endTime.setHours(12, 30, 0, 0);

    this.editedAction = {
      allDay: false,
      title: '',
      startTime: startTime,
      endTime: endTime,
      items: ['', '', '', '', ''],
      isNew: true
    };
    console.log(this.editedAction);
    this.navCtrl.push("ActionPlanPage", {action: this.editedAction});
  }

  onActionSelected(event) {
    console.log("Action selected = " + event.title);
    this.editedAction = event;
    this.navCtrl.push("ActionPlanPage", {action: this.editedAction});
  }

  onDateChanged(event) {
    // event.setHours(0, 0, 0, 0); 
    this.selectedDate = event;
  }

  markDisabled = (date) => {
    date.setHours(0, 0, 0, 0);
    return date < this.todayDate;
  };

}
