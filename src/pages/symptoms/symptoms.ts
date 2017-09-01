import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Symptom } from '../../enums/enums';

/**
 * Generated class for the SymptomsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-symptoms',
  templateUrl: 'symptoms.html',
})


export class SymptomsPage {
  
  dateTime : string;
  allDay : boolean = false;

  items : any[] = null;
  values : string[] = Array();

  canSubmit : boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.items = [
      {id: Symptom.Palpitation, title: 'Palpitation'},
      {id: Symptom.ChestPain, title: 'Chest pain'},
      {id: Symptom.Dyspnea, title: 'Shortness of breath'},
      {id: Symptom.Fatigue, title: 'Fatigue'},
      {id: Symptom.Lightheadedness, title: 'Lightheadedness'}
    ];
    for (let i in this.items)
      this.values[i] = '0';
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SymptomsPage');
    console.log(this.values);

    this.dateTime = new Date().toISOString();
  }

  submit() {
    this.navCtrl.pop();
    console.log("dateTime:" + this.dateTime);
  }

  valueChanged() {
    this.canSubmit = false;
    for (let v of this.values)
      if (v != "0") {
        this.canSubmit = true;
        break;
      }
  }
}
