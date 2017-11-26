import { DataProvider } from './../../providers/data/data';
import { Component } from '@angular/core';
import { NavController, NavParams, IonicPage } from 'ionic-angular';

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
  protected items = [];

  constructor(public navCtrl: NavController, public navParams : NavParams,  private dataService: DataProvider) {
    let s = Number(this.navParams.get('scenario'));
    this.scenario = s > 0 ? s : 1;
    console.info("Current scenario = " + this.scenario);
    this.showIntro = (this.scenario == 1);
    this.showIntro = false;
    this.dataService.setScenario(this.scenario);
    
    this.items = [
      {title: "Patient Education", iconName: "book", targetPage: "EducationPage", scenarios: [1, 2, 3]},
      {title: "Behavior Change", iconName: "body", targetPage: "BehaviorChangePage", scenarios: [1, 2, 3]},
      {title: "Reporting", iconName: "create", targetPage: "ReportingPage", scenarios: [2, 3]}
    ];
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
   
  openItemDetailPage(item) {
    this.navCtrl.push(item.targetPage);
  }

  resetStorage(){
    console.log("Resetting storage...");
    let infoChoices = ['Diet', 'Exercise', 'Risky events', 'Stress', 'Sports', 'Travel', 'Being engaged', 'Barriers to engagement', 'What is AFib?', 'What are the symptoms?', 'What are the consequences of AFib?', 'How frequent is AFib?', 'Are there different types of AFib?', 'What are the treatment strategies?', 'What is radio-frequency ablation?', 'Which is the most effective therapy?'];
      
    for(var i=0; i<infoChoices.length; i++)
      this.dataService.set(infoChoices[i], 'Not visited');    
}
   
}
