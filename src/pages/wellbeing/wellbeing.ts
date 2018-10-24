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
      {title: "Corps", iconName: "man", subItems: [
        {title: 'Bonne santé', content: 'En diminuant la probabilité d’un AVC, vous vous maintiendrez en bonne santé', image: 'body-1', id: Pro.Body1},
        {title: 'Confort', content: 'Vous serez plus à l’aise pour parler de votre santé avec les membres de votre famille et votre équipe de soutien en santé', image: 'body-2', id: Pro.Body2}
      ]},
      {title: "Esprit", iconName: "bulb", subItems: [
        {title: 'Optimisme', content: 'Vous vous sentirez plus optimiste quant à votre avenir et profiterez davantage de la vie', image: 'mind-1', id: Pro.Mind1},
        {title: 'Réduction des coûts des soins de santé', content: 'En suivant l’anticoagulothérapie et en réduisant votre risque d’AVC, vous réduirez les coûts des soins de santé pour vous-même et votre famille.', image: 'mind-2', id: Pro.Mind2},
        {title: 'Meaningful activities', content: 'You will be able to engage in meaningful activities', image: 'mind-3', id: Pro.Mind3}
      ]},
      {title: "Relations", iconName: "contacts", subItems: [
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
          title: 'Félicitations',
          subTitle: 'Vous commencez à reconnaître différents types de bienfaits susceptibles de découler de votre mobilisation et de votre adhésion au traitement. Il s’agit d’une première étape importante dans laquelle vous aurez fait preuve de votre engagement.',
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
