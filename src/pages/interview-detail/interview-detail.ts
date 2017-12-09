import { Component } from '@angular/core';
import { IonicPage, NavParams } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';

/**
 * Generated class for the InterviewDetailsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-interview-detail',
  templateUrl: 'interview-detail.html',
})
export class InterviewDetailPage {

  protected item = null;

  constructor(public navParams: NavParams, protected dataService : DataProvider) {
    this.item = this.navParams.get('item')
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InterviewDetailsPage');
    if (this.item.id)
      this.dataService.addSeenMaterial(this.item.id);
  }
}
