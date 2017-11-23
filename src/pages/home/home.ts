import { Component } from '@angular/core';
import { NavController, NavParams, IonicPage } from 'ionic-angular';
import { Storage } from '@ionic/storage';

@IonicPage({
  segment: 'scenario/:scenario'
})

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  private showIntro : boolean = true;
  protected scenario : number;

  constructor(public navCtrl: NavController, public navParams : NavParams,  private storage: Storage) {
    let s = this.navParams.get('scenario');
    this.scenario = (s == null || s == ":scenario") ? 1 : s;
    console.info("Current scenario = " + this.scenario);
    this.showIntro = (this.scenario == 1);
  }
  
  ionViewDidLoad(){
    if (this.showIntro) {
      this.navCtrl.push("IntroPage");
      this.showIntro = false;
    }
    this.resetStorage();    
    console.log('ionViewDidLoad HomePage');
  }
  openEducationPage() {
    this.navCtrl.push("EducationPage");
  }

  openBehaviorChangePage() {
    this.navCtrl.push("BehaviorChangePage");
  }

  openReportingPage() {
    this.navCtrl.push("ReportingPage");
  }
   
  resetStorage(){
    console.log("Resetting storage...");
    let infoChoices = ['Diet', 'Exercise', 'Risky events', 'Stress', 'Sports', 'Travel', 'Being engaged', 'Barriers to engagement', 'What is AFib?', 'What are the symptoms?', 'What are the consequences of AFib?', 'How frequent is AFib?', 'Are there different types of AFib?', 'What are the treatment strategies?', 'What is radio-frequency ablation?', 'Which is the most effective therapy?'];
      
    for(var i=0; i<infoChoices.length; i++)
    this.storage.set(infoChoices[i], 'Not visited');
    
    
}
   
}
