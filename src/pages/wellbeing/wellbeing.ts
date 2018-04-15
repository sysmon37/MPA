import { DataProvider } from './../../providers/data/data';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Pro } from './../../enums/enums';

/**
 * Generated class for the WellbeingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-wellbeing',
  templateUrl: 'wellbeing.html',
})
export class WellbeingPage {

  protected items = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public dataService: DataProvider, public alertCtrl: AlertController) {
    this.items = [
      {title: "Body", iconName: "man", subItems: [
        {title: 'Good health', content: 'By lowering chances of stroke, you will maintain good health', image: 'body-1', id: Pro.Body1},
        {title: 'Comfort', content: 'You will be more comfortable talking about your health with your family and health support team', image: 'body-2', id: Pro.Body2}
      ]},
      {title: "Mind", iconName: "bulb", subItems: [
        {title: 'Optimism', content: 'You will feel more optimistic about your future and enjoy life more', image: 'mind-1', id: Pro.Mind1},
        {title: 'Reduced health costs', content: 'By following anticoagulation therapy and lowering your risk of stroke, you will reduce healthcare costs for yourself and your family', image: 'mind-2', id: Pro.Mind2},
        {title: 'Meaningful activities', content: 'You will be able to engage in meaningful activities', image: 'mind-3', id: Pro.Mind3}
      ]},
      {title: "Relationships", iconName: "contacts", subItems: [
        {title: 'Long-term plans', content: 'You will be able to make long-term plans with your family and friends', image:'relations-1', id: Pro.Relations1},
        {title: 'Live life fully', content: 'You will be able to live your life fully and participate in activities you enjoy', image:'relations-2', id: Pro.Relations2}
      ]}
    ];

    for (let item of this.items) 
      for (let subItem of item.subItems)
        subItem.imageUrl = subItem.image != '' ? `/assets/${subItem.image}.jpg` : '';
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WellbeingPage');
  }

  ionViewWillEnter(){
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

  openItemDetailPage(item) {
    this.navCtrl.push("WellbeingDetailPage", {item: item});
  }
}
