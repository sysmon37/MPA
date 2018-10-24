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
      {title: "Je sens que je peux obtenir du soutien pour des soins médicaux et des problèmes de santé lorsque j’en ai besoin"},
      {title: "J’ai été en mesure d’établir une routine pour maintenir un mode de vie sain"},
      {title: "Je peux faire part de mes préoccupations à mon prestateur de soins de santé même lorsqu’il ou elle ne le demande pas"},
      {title: "Je sens que je peux donner suite, à la maison, aux traitements médicaux dont j’ai besoin"},
      {title: "J’ai la volonté nécessaire pour trouver des solutions lorsque mon état de santé évolue ou qu’il présente un problème"},
      {title: "Je sens que, malgré ma condition, je peux vivre pleinement ma vie"},
      {title: "Je sens que le temps que je consacre à la prise en charge de ma condition est bien employé"},
      {title: "Je suis le responsable de la prise en charge de mon état de santé"}
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
