import { Component } from '@angular/core';
import { IonicPage, NavParams } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';
import { Material } from '../../enums/enums';

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
    if (this.item.id != null) {
      this.dataService.addSeenMaterial(this.item.id);
      // This is a bit ugly hack -- in a final system we should have a hierarchy of 
      // educational materials
      let ids = [Material.InterviewQA1, Material.InterviewQA2, Material.InterviewQA3, Material.InterviewQA4, Material.InterviewQA5, Material.InterviewQA6, Material.InterviewQA7];
      let seen = this.dataService.getSeenMaterials();
      let allSeen = true;
      for (let id of ids) 
        if (seen.indexOf(id) == -1) {
          allSeen = false;
          break;
        }
      if (allSeen)
        this.dataService.addSeenMaterial(Material.Interview);      
    }
  }
}
