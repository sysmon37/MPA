import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ProsDetailPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pros-detail',
  templateUrl: 'pros-detail.html',
})
export class ProsDetailPage {

  protected title = '';
  protected itemContent = '';
  protected itemImageUrl = '';

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    let item = navParams.get('item');
    this.title = item.title;
    this.itemContent = item.content;
    this.itemImageUrl = item.imageUrl;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProsDetailPage');
  }

}
