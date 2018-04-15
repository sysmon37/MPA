import { DataProvider } from './../../providers/data/data';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the WellbeingDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-wellbeing-detail',
  templateUrl: 'wellbeing-detail.html',
})
export class WellbeingDetailPage {

  protected item = null;
  protected understood: boolean[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public dataService: DataProvider) {
    this.item = this.navParams.get("item");
    for (let subItem of this.item.subItems) 
      this.understood[subItem.id] = false;
    let understood = this.dataService.getUnderstoodPros();
    for (let id of understood)
      this.understood[id] = true;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WellbeingDetailPage');
  }

  updateUnderstood(subItem){
    if (this.understood[subItem.id]) 
      this.dataService.addUnderstoodPro(subItem.id);
    else
       this.dataService.removeUnderstoodPro(subItem.id);
  }
 
}
