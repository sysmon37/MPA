import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the BarrierDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-barrier-detail',
  templateUrl: 'barrier-detail.html',
})
export class BarrierDetailPage {

  protected item = null;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.item = this.navParams.get("item");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BarrierDetailPage');
  }

  openHintPage() {
    this.navCtrl.push(this.item.targetPage);
  }
}
