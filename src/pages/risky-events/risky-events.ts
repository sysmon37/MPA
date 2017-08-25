import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the RiskyEventsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-risky-events',
  templateUrl: 'risky-events.html',
})
export class RiskyEventsPage {
    
    isToggled1 : boolean;
    isToggled2 : boolean;
    isToggled3 : boolean;
    isToggled4 : boolean;
    isToggled5 : boolean;
    isToggled6 : boolean;
    isToggled7 : boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
      
      
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RiskyEventsPage');
  }
    
    notify(){
        
        console.log(this.isToggled1);
        console.log(this.isToggled2);
        console.log(this.isToggled3);
        console.log(this.isToggled4);
        console.log(this.isToggled5);
        console.log(this.isToggled6);
        console.log(this.isToggled7);
    }

}
