import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { RiskyEvent } from '../../enums/enums';
/**
 * Generated class for the RiskyEventsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-risky-events',
  templateUrl: 'risky-events.html',
})
export class RiskyEventsPage {
 
  protected selected = null;
  protected previous = null;
  protected event = null;
  protected dateTime : string;
  protected items : any[];
  // protected values : boolean[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {      
    this.items = [
      {id: RiskyEvent.Biopsy, title: 'Biopsy'},
      {id: RiskyEvent.MinorSurgery, title: 'Minor surgery'},
      {id: RiskyEvent.MajorSurgery, title: 'Major surgery'},
      {id: RiskyEvent.Dentist, title: 'Dentist (extraction of 2 or more teeth)'},
      {id: RiskyEvent.DiagnosticProcedure, title: 'Diagnostic procedure (with risk of bleeding)'},
      {id: RiskyEvent.Hospitalization, title: 'Hospitalization'}
    ];
    this.event = this.navParams.get('event');
    this.selected = this.event.id;

    // for (let i in this.items)
    //   this.values[i] = this.items[i].id == this.event.id;    

    this.dateTime = this.event.startTime.toISOString();   
    console.log("iso date = " + this.dateTime);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RiskyEventsPage');

  }
 
  submit() {
    this.navCtrl.pop();
    // console.log(this.values);
  }

  onValueChanged() {
    console.log("value changed = " + this.selected);
    if (this.selected == this.previous)
      this.selected = null;
    this.previous = this.selected;
    this.event.id = this.selected;
  }

  onItemSelected(item) {
    this.event.title = item.title;
  }
}
