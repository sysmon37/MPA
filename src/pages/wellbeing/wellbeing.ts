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
        {title: '', content: 'By lowering chances of stroke, you will maintain good health', image: 'body-1'},
        {title: '', content: 'You will be more comfortable talking about your health with your family and health support team', image: 'body-2'}
      ]},
      {title: "Mind", iconName: "bulb", subItems: [
        {title: '', content: 'You will feel more optimistic about your future and enjoy life more', image: 'mind-1'},
        {title: '', content: 'By following anticoagulation therapy and lowering your risk of stroke, you will reduce healthcare costs for yourself and your family', image: 'mind-2'},
        {title: '', content: 'You will be able to engage in meaningful activities', image: 'mind-3'}
      ]},
      {title: "Relationships", iconName: "contacts", subItems: [
        {title: '', content: 'You will be able to make long-term plans with your family and friends', image:'relations-1'},
        {title: '', content: 'You will be able to live your life fully and participate in activities you enjoy', image:'relations-2'}
      ]}
    ];

    for (let item of this.items) 
      for (let subItem of item.subItems)
        subItem.imageUrl = subItem.image != '' ? `/assets/${subItem.image}.jpg` : '';
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WellbeingPage');
  }

  openItemDetailPage(item) {
    this.navCtrl.push("WellbeingDetailPage", {item: item});
  }
}
