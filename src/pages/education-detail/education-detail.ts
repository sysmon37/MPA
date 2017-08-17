import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the EducationDetailPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-education-detail',
  templateUrl: 'education-detail.html',
})
export class EducationDetailPage {

  title;
  itemTitle;
  itemContent;
  itemImage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EducationDetailPage');
    
    let item = this.navParams.get("item");
    this.title = this.navParams.get("title");
    this.itemTitle = item.title;
    this.itemContent = item.content;
    this.itemImage = item.image;
  }

}
