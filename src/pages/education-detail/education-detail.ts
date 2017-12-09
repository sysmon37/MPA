import { DataProvider } from './../../providers/data/data';
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

  protected item = null;
   
  constructor(public navCtrl: NavController, public navParams: NavParams, protected dataService : DataProvider) {
    this.item = this.navParams.get("item");   
  }
    

  ionViewDidLoad() {
    console.log('ionViewDidLoad EducationDetailPage');
    console.log(this.item.title);
    if (this.item.id) {
      this.dataService.addSeenMaterial(this.item.id);
    }
  }   
}