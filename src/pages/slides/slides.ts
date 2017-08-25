import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from './../home/home';
import { Storage } from '@ionic/storage';
import { InterviewPage } from './../interview/interview';


/**
 * Generated class for the SlidesPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-slides',
  templateUrl: 'slides.html',
})
export class SlidesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SlidesPage');
    this.storageReset();
      
  }
    
    openHomePage() {
    this.navCtrl.push(HomePage);
  }
    
    openInterviewPage() {
    this.navCtrl.push(InterviewPage);
  }
    
    storageReset(){
        
       
     var infoChoices = ['Diet', 'Exercise', 'Risky events', 'Stress', 'Sports', 'Travel', 'Being engaged', 'Barriers to engagement', 'What is AFib?', 'What are the symptoms?', 'What are the consequences of AFib?', 'How frequent is AFib?', 'Are there different types of AFib?', 'What are the treatment strategies?', 'What is radio-frequency ablation?', 'Which is the most effective therapy?'];
        
        
        for(var i=0; i<infoChoices.length; i++)
        this.storage.set(infoChoices[i], 'Not visited');
        
        
    }
}
