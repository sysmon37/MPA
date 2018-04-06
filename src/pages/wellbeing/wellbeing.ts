import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.items = [
      {title: "Body", iconName: "man", subItems: [
        {title: 'Physical wellbeing', content: 'You will have more energy to do things you like', image: 'physical-1'},
        {title: 'Behavioral wellbeing', content: 'You will be more comfortable talking about your health with your family and health support team', image: 'purposeful-2'}
      ]},
      {title: "Mind", iconName: "bulb", subItems: [
        {title: 'Emotional wellbeing', content: 'You will feel more optimistic about your future and enjoy life more', image: 'emotional-1'}
      ]},
      {title: "Relationships", iconName: "contacts", subItems: [
        {title: 'Social wellbeing', content: 'You will be able to make long-term plans with your family and friends', image:'social-2'}
      ]}
    ];

    for (let item of this.items) 
      for (let subItem of item.subItems)
      subItem.imageUrl = `/assets/${subItem.image}.jpg`;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WellbeingPage');
  }

  openItemDetailPage(item) {
    this.navCtrl.push("WellbeingDetailPage", {item: item});
  }
}
