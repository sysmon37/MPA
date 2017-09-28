import { DataProvider } from './../../providers/data/data';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Nutrient } from '../../enums/enums';


/**
 * Generated class for the DietNonCompliancePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-diet-non-compliance',
  templateUrl: 'diet-non-compliance.html',
})
export class DietNonCompliancePage {

  dateTime: string;
  items: any = [];
  canSubmit: boolean = true;

  constructor(public navCtrl: NavController, public navParams: NavParams, public dataService: DataProvider) {
    this.items = [
      // {id: Nutrient.Broccoli, title: 'Broccoli', imageUrl: '/assets/broccoli.jpg', value: '?'},
      // {id: Nutrient.Sprouts, title: 'Brussels sprouts', imageUrl: '/assets/sprouts.jpg', value: '?'},
      // {id: Nutrient.Endive, title: 'Endive', imageUrl: '/assets/endive.jpg', value: '?'},
      // {id: Nutrient.Spinach, title: 'Spinach', imageUrl: '/assets/spinach.jpg', value: '?'},
      {id: Nutrient.VitaminK, title: 'Vitamin K', imageUrl: '', value: '?'}
    ];

    this.dataService.getNutrients().then((data) => {
      this.dataService.unpackValues(data, this.items);
      console.log("Reading nutrients");
      this.logValues();
    });
  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DietNonCompliancePage');
    this.dateTime = new Date().toISOString();
  }

  valueChanged(item, value) {
    item.value = item.value == value ? '?' : value;
    this.logValue(item);
  }

  ionViewDidLeave(){
    console.log('ionViewDidLeave DietNonCompliancePage');    
    let values = this.dataService.packValues(this.items);
    this.dataService.setNutrients(values);
    console.log("Saving nutrients " + values);       
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
