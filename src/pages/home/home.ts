import { IntroPage } from './../intro/intro';
import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { EducationPage } from './../education/education';
import { BehaviorChangePage} from './../behavior-change/behavior-change';
import { ReportingPage } from './../reporting/reporting';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  private showIntro : boolean = true;

  constructor(public navCtrl: NavController, private storage: Storage) {

  }
  
  ionViewDidLoad(){
    if (this.showIntro) {
      this.navCtrl.push(IntroPage);
      this.showIntro = false;
      this.resetStorage();
    }
  }
  openEducationPage() {
    this.navCtrl.push(EducationPage);
  }

  openBehaviorChangePage() {
    this.navCtrl.push(BehaviorChangePage);
  }

  openReportingPage() {
    this.navCtrl.push(ReportingPage);
  }
   
  resetStorage(){
       
  var infoChoices = ['Diet', 'Exercise', 'Risky events', 'Stress', 'Sports', 'Travel', 'Being engaged', 'Barriers to engagement', 'What is AFib?', 'What are the symptoms?', 'What are the consequences of AFib?', 'How frequent is AFib?', 'Are there different types of AFib?', 'What are the treatment strategies?', 'What is radio-frequency ablation?', 'Which is the most effective therapy?'];
      
    for(var i=0; i<infoChoices.length; i++)
    this.storage.set(infoChoices[i], 'Not visited');
    
    
}
   
}
