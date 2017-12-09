import { DataProvider } from './../../providers/data/data';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Treatment } from '../../enums/enums';

/**
 * Generated class for the TreatmentNonCompliancePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-treatment-non-compliance',
  templateUrl: 'treatment-non-compliance.html',
})
export class TreatmentNonCompliancePage {

  dateTime: string;
  treatment: string;
  // problem : string;
  // reason : string;

  items: any = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public dataService: DataProvider) {
    this.items = [
      {id: Treatment.Anticoagulant, title: "Dabigatran", description: 'Capsule, 150 mg', imageUrl: '/assets/dabigatran-1x.jpg', value: '', doses: [{value: '?'}, {value:'?'}]},
      {id: Treatment.RateControl, title: "Metoprolol", description: 'Tablet, 25 mg', imageUrl: '/assets/metoprolol-1x.jpg', value: '', doses: [{value: '?'}, {value:'?'}]}
    ];

    this.dataService.getDrugs().then((data) => {
      console.log(data);
      this.dataService.unpackMultiValues(data, this.items);
      console.log("Reading drugs");
      this.logValues();
    });    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TreatmentNonCompliancePage');
    this.dateTime = new Date().toISOString();
  }

  ionViewDidLeave(){
    console.log('ionViewDidLoad TreatmentNonCompliancePage');
    let values = this.dataService.packMultiValues(this.items);
    console.log("Saving drugs " + values);
    this.dataService.setDrugs(values);
    
  }
  valueChanged(item, value) {
    item.value = item.value == value ? '?' : value;
    console.log(item);
  }

  logValues() {
    for (let item of this.items) {
      this.logValue(item);
    }
  }
  
  logValue(item) {
    let s = "";
    for (let d of item.doses)
      s = s + d.value + " ";
    console.log(item.id + "|" + item.title + " = " + s);    
  }  
}
