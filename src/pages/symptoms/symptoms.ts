import { DataProvider } from './../../providers/data/data';
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

  canSubmit : boolean = true;

  constructor(public navCtrl: NavController, public navParams: NavParams, public dataService: DataProvider) {
    this.items = [
      {id: Symptom.Palpitation, title: 'Palpitation', value: '?'},
      {id: Symptom.ChestPain, title: 'Chest pain', value: '?'},
      {id: Symptom.Dyspnea, title: 'Shortness of breath', value: '?'},
      // {id: Symptom.Fatigue, title: 'Fatigue'},
      // {id: Symptom.Lightheadedness, title: 'Lightheadedness'}
    ];

    this.dataService.getSymptoms().then((data) => {
        dataService.unpackValues(data, this.items);
        console.log("Reading symptoms");
        this.logValues();
      })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SymptomsPage');
    this.dateTime = new Date().toISOString();
  }

  submit() {
    this.navCtrl.pop();
    console.log("dateTime:" + this.dateTime);
    let values = this.dataService.packValues(this.items);
    this.dataService.setSymptoms(values);
    console.log("Saving symptoms " + values);
  }

  valueChanged(item, value) {  
    item.value = item.value == value ? '?' : value;
    this.logValue(item);
    
    // this.canSubmit = false;
    // for (let v of this.values)
    //   if (v != "0") {
    //     this.canSubmit = true;
    //     break;
    //   }
  }

  logValues() {
    for (let item of this.items) {
      this.logValue(item);
    }
  }

  logValue(item) {
    console.log(item.id + "|" + item.title + " = " + item.value);    
  }
}
