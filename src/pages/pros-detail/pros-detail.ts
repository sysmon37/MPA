import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';

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

  protected understood;
  protected item = null;

  constructor(public navCtrl: NavController, public navParams: NavParams, private dataService: DataProvider) {
    this.item = navParams.get('item'); 
    this.understood = this.dataService.getUnderstoodPros().indexOf(this.item.id) != -1;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProsDetailPage');
    console.log(this.item);
  }

  updateUnderstood(){
   if (this.understood) 
     this.dataService.addUnderstoodPro(this.item.id);
   else
      this.dataService.removeUnderstoodPro(this.item.id);
  }
}
