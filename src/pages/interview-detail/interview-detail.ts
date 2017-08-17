import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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

  question;
  answer;

  constructor(public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InterviewDetailsPage');
    this.question = this.navParams.get('item').question;
    this.answer = this.navParams.get('item').answer;
  }

}
