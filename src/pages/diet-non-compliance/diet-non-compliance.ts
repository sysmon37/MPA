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

  dateTime : string;
  meal : string;
  // nutrient : string;
  // amount : string;

  items : any = [];
  values : string[] = [];
  value : string = '?';

  canSubmit : boolean = true;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.items = [
      {id: Nutrient.Broccoli, title: 'Broccoli', imageUrl: '/assets/broccoli.jpg'},
      {id: Nutrient.Sprouts, title: 'Brussels sprouts', imageUrl: '/assets/sprouts.jpg'},
      {id: Nutrient.Endive, title: 'Endive', imageUrl: '/assets/endive.jpg'},
      {id: Nutrient.Spinach, title: 'Spinach', imageUrl: '/assets/spinach.jpg'},
    ];
    for (let i in this.items)
      this.values[i] = "0";
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DietNonCompliancePage');
    this.dateTime = new Date().toISOString();
  }

  valueChanged(value) {
    this.value = value;
    console.log(this.value);
    // this.canSubmit = false;
    // if (this.meal != '')
    //   for (let v of this.values)
    //   if (v != "0") {
    //     this.canSubmit = true;
    //     break;
    //   }
    //   console.log("valueChanged - canSubmit:" + this.canSubmit);
    }

  submit() {
    console.log(this.values);
    this.navCtrl.pop();
  }
}
