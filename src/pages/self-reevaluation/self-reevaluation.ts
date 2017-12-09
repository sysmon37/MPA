import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ViewController } from 'ionic-angular/navigation/view-controller';

/**
 * Generated class for the SelfReevaluationPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-self-reevaluation',
  templateUrl: 'self-reevaluation.html',
})
export class SelfReevaluationPage {

  protected items = [];
  protected values = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, private viewCtrl: ViewController) {
    this.items = [
      {title: "I am confident that I can get support for medical care and health problems when I need it"},
      {title: "I have been able to develop a routine to maintain healthy lifestyle"},
      {title: "I can communicate with my health provider concerns I have even when she/he does not ask"},
      {title: "I am confident that I can follow through on medical treatments I need to do at home"},
      {title: "I have willpower to seek out solutions when new situations or problems arise with my health condition"},
      {title: "I am positive that despite my condition I can live life to the fullest"},
      {title: "I am confident that time I dedicate to managing my condition is time well spent"},
      {title: "I am the person who is responsible for managing my health condition"}
    ];

    for (let i in this.items)
      this.values[i] = false;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SelfReevaluationPage');
  }

  openSelfReevluationSummary() {
    // Go to the summary page, but remove the current page from navigation history, 
    // so it is a bit harder for the user to tweak the self-reevaluation questionnaire.
    this.navCtrl.push("SelfReevaluationSummaryPage", {values : this.values})
                .then(() => {
                  const index = this.viewCtrl.index;
                  this.navCtrl.remove(index);
                });
  }
}
