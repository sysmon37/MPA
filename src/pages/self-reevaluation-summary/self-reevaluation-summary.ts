import { DataProvider } from './../../providers/data/data';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Action } from '../../enums/enums';

/**
 * Generated class for the SelfReevaluationSummaryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-self-reevaluation-summary',
  templateUrl: 'self-reevaluation-summary.html',
})
export class SelfReevaluationSummaryPage {

  protected score : number;
  protected message = "";

  constructor(public navCtrl: NavController, public navParams: NavParams, private dataService : DataProvider) {
    let values = this.navParams.get("values");
    console.log(values);

    this.score = 0.0;
    for (let v of values)
      if (v) this.score++;
    this.score = Math.round(this.score * 100.0 / values.length);
    console.log("score = " + this.score);

    if (this.score >= 70)
      this.message  = "This would be a message displayed when the patient passes the threshold of 70%. It should praise the patient for her/his achievement."
    else if (this.score >= 50) 
      this.message = "This would be a message displayed when the score is between 50 and 70%. It should state the patient is very close to the boundary and encourage her/him to try a bit more.";
    else
      this.message = "This would be a message displayed when the score is below 50%. It should encourage the patient to try harder.";
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SelfReevaluationSummaryPage');
    this.dataService.addInvokedAction(Action.SelfReevaluation);
  }

}
