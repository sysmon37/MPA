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
    
    dateTime : string;
    // allDay : boolean = false;
    items : any[];
    values : boolean[] = [];
    canSubmit : boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams) {      
    this.items = [
      {id: RiskyEvent.Biopsy, title: 'Biopsy'},
      {id: RiskyEvent.MinorSurgery, title: 'Minor surgery'},
      {id: RiskyEvent.MajorSurgery, title: 'Major surgery'},
      {id: RiskyEvent.Dentist, title: 'Dentist (extraction of 2 or more teeth)'},
      {id: RiskyEvent.DiagnosticProcedure, title: 'Diagnostic procedure (with risk of bleeding)'},
      {id: RiskyEvent.Hospitalization, title: 'Hospitalization'}
    ];
    for (let i in this.items)
      this.values[i] = false;
    
      this.dateTime = new Date().toISOString();      
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RiskyEventsPage');
  }
 
  submit() {
    this.navCtrl.pop();
    console.log(this.values);
  }

  valueChanged() {
    this.canSubmit = false;
    for (let v of this.values)
      if (v) {
        this.canSubmit = true;
        break;
      }
  }
}
