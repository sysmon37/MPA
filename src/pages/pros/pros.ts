import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Pro } from './../../enums/enums';
import { DataProvider } from '../../providers/data/data';

/**
 * Generated class for the ProsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pros',
  templateUrl: 'pros.html',
})
export class ProsPage {

  items = [];
  clickedItem = null;

  constructor(public navCtrl: NavController, public navParams: NavParams, private dataService: DataProvider, private alertCtrl : AlertController) {
    this.items = [
      {pos: 0, imageUrl: '', subItems: [
        {title: 'Purposeful Wellbeing', content: 'You will have more interest in the future', image: 'purposeful-1', id: Pro.Purposeful1},
        {title: 'Emotional Wellbeing', content: 'You will feel more optimistic, have more energy and enjoy life more', image: 'emotional-1', id: Pro.Emotional1}
      ]},
      {pos: 0, imageUrl: '', subItems: [
        {title: 'Social Wellbeing', content: 'Your partner will be relieved because you can likely share a longer and healthier life together', image: 'social-2', id: Pro.Social},
        {title: 'Purposeful Wellbeing', content: 'You will set a great example for others', image: 'purposeful-3', id: Pro.Purposeful3}
      ]},
      { pos: 0, imageUrl: '', subItems: [
        {title: 'Behavioral Wellbeing', content: 'You will reduce excuses for not becoming engaged', image: 'behavioral-1', id: Pro.Behavioral},
        {title: 'Purposeful Wellbeing', content: 'You won’t get judged by others, you won’t have to put up with critical looks from others', image: 'purposeful-2', id: Pro.Purposeful2}        
      ]},
      {pos: 0, imageUrl: '', subItems: [
        {title: 'Physical Wellbeing', content: 'You will be able to continue your daily routine', image: 'physical-1', id: Pro.Physicial}
      ]},
      {pos: 0, imageUrl: '', subItems: [
        {title: 'Emotional Wellbeing', content: 'You won’t have to feel embarrassed about being unengaged in your health', image: 'emotional-2', id: Pro.Emotional2}
      ]},
    ];

    for (let item of this.items) {
      this.updateImageUrl(item);
    }

  }

  updateImageUrl(item) {
    item.imageUrl = `/assets/${item.subItems[item.pos].image}.jpg`;    
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ProsPage');
  }

  ionViewWillEnter(){
    console.log('ionViewWillEnter ProsPage');
    if (this.clickedItem === null)
      return;
    let item  = this.clickedItem;
    item.pos = (item.pos + 1) % item.subItems.length;
    this.updateImageUrl(item);    
    if (this.dataService.getUnderstoodPros().length >= this.dataService.MIN_UNDERSTOOD_PROS && this.dataService.getShowCommitmentPopup()) {
      let alert = this.alertCtrl.create({
          title: 'Congratulations',
          subTitle: 'You have realized different kinds of well-being that may result from your engagement and adherence. This is a first significant step in which you have demonstrated your commitment',
          buttons: ['OK']
       });
      alert.present();        
      this.dataService.setShowCommitmentPopup(false);
    }
  }

  showProsDetailPage(item) {
    let subItem = item.subItems[item.pos];
    this.navCtrl.push("ProsDetailPage", {item: {imageUrl: item.imageUrl, title: subItem.title, content: subItem.content, id: subItem.id}});
    this.clickedItem = item;
  }
}
