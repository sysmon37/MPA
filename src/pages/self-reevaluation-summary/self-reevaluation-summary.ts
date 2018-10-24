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

    if (this.score >= 80)
      this.message  = "Congratulations! You are doing a great job in becoming a fully engaged patient.";
    else if (this.score >= 50) 
      this.message = "Félicitations ! Les mesures que vous avez prises commencent à porter leurs fruits. Veuillez persévérer dans vos efforts et reprendre l’autoréévaluation bientôt.";
    else
      this.message = "We know you are trying hard to improve your engagement and appreciate it! Please take some more time to work on this and than repeat self-reevaluation.";
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SelfReevaluationSummaryPage');
    this.dataService.addInvokedAction(Action.SelfReevaluation);
  }

}
