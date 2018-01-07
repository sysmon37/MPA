import { DataProvider } from './../../providers/data/data';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CalendarComponent } from 'ionic2-calendar/calendar';
import { ViewChild } from '@angular/core';

/**
 * Generated class for the RiskyEventCalendarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-risky-event-calendar',
  templateUrl: 'risky-event-calendar.html',
})
export class RiskyEventCalendarPage {

  @ViewChild(CalendarComponent) protected calendar;

  protected editedEvent = null;
  protected riskyEvents = [];  
  protected calendarMode = 'month';
  protected todayDate = new Date();
  protected selectedDate = new Date();

  constructor(public navCtrl: NavController, public navParams: NavParams, protected dataService: DataProvider) {
    this.todayDate.setHours(0, 0, 0, 0);
    this.riskyEvents = this.dataService.getRiskyEvents();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RiskyEventCalendarPage');
  }

  ionViewWillEnter() {
    console.log('ionViewWillEnter RiskyEventCalendarPage');
    if (this.editedEvent == null)
      return;

    if (!this.editedEvent.isNew) {
      this.riskyEvents = this.riskyEvents.filter((value, index, array) => value.id != null);
    } else if (this.editedEvent.id != null) {
      this.riskyEvents.push(this.editedEvent);
      this.editedEvent.isNew = false;
    }
    this.calendar.loadEvents();
    this.dataService.setRiskyEvents(this.riskyEvents);
    console.log(this.riskyEvents);
  }

  onAddEvent() {
    let utcStart = new Date(Date.UTC(
      this.selectedDate.getFullYear(), this.selectedDate.getMonth(), this.selectedDate.getDate()));
    let utcEnd = new Date(utcStart);
    utcEnd.setUTCDate(utcEnd.getUTCDate() + 1);
    this.editedEvent = {
      allDay: true,
      title: '',
      startTime: utcStart,
      endTime: utcEnd,
      id: null,
      isNew: true
    };
    this.navCtrl.push("RiskyEventPage", {event: this.editedEvent})
  }

  onEventSelected(event) {
    this.editedEvent = event;
    this.navCtrl.push("RiskyEventPage", {event: this.editedEvent})    
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
