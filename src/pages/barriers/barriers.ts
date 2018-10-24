import { Action } from './../../enums/enums';
import { DataProvider } from './../../providers/data/data';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the BarriersToEngagementPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-barriers',
  templateUrl: 'barriers.html',
})
export class BarriersPage {

  protected items = [];
  
  constructor(public navCtrl: NavController, public navParams: NavParams, private dataService : DataProvider) {
    this.items = [
      {title: "Je ne comprends pas très bien ce que mon médecin, mon.ma infirmi.er.ère, ou les gens à ma pharmacie m’ont expliqué jusqu’à maintenant", action: "", targetPage: ""},
      {title: "Je suis incapable, sans hésiter, de donner le nom de mes médicaments ni de dire à quoi ils servent", action: "", targetPage: ""},
      {title: "Je crois que tous les médicaments ont des effets secondaires indésirables et que je devrais éviter d’en prendre si possible", action: "", targetPage: ""},
      {title: "Au fond, je me sens bien. Donc je ne suis pas toujours sûr d’avoir à prendre mes médicaments tous les jours", action: "", targetPage: ""},
      {title: "Je n’arrive pas à prendre mes médicaments tous les jours, machinalement, à une heure fixe ou à un moment précis", action: "Servez-vous de techniques de base pour mettre en place des aide-mémoire (languettes adhésives, calendrier, alertes, etc.) et établir une routine", hint: "Servez-vous de la fonction calendrier pour établir des alertes pertinentes", targetPage: "ActionPlanCalendarPage"},
      {title: "De manière générale, je me sens mal, parfois découragé et déprimé", action: "", targetPage: ""},
      {title: "J’ai vraiment besoin d’aide tous les jours (et particulièrement en ce qui concerne les médicaments utilisés dans mon traitement), mais je n’en reçois aucune", hint: "Read an interview with an engaged patient to learn about his experience", targetPage: ""},

    ];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BarriersToEngagementPage');
    this.dataService.addInvokedAction(Action.Barriers);
  }

  openItemDetailPage(item) {
    this.navCtrl.push("BarrierDetailPage", {item: item});
  }
}
