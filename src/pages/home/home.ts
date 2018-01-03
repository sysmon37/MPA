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
    this.scenario = Math.min(2, Math.max(1, s));
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

}

