import { DataProvider } from './../../providers/data/data';
import { Component } from '@angular/core';
import { NavController, NavParams, IonicPage } from 'ionic-angular';
import moment from 'moment';

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
    this.scenario = Math.min(2, Math.max(1, isNaN(s) ? 0 : s));
    console.info("Current scenario = " + this.scenario);
    this.showIntro = (this.scenario == 1);
    this.showIntro = false;
    this.dataService.setScenario(this.scenario);
    this.dataService.setUndestoodPros([]);
    
    this.items = [
      {title: "Patient Education", iconName: "book", targetPage: "EducationPage", scenarios: [1, 2, 3]},
      {title: "Behavior Modification", iconName: "body", targetPage: "BehaviorChangePage", scenarios: [1, 2, 3]},
      {title: "Reporting", iconName: "create", targetPage: "ReportingPage", scenarios: [2, 3]},
      {title: "Goal Setting", iconName: "create", targetPage: "GoalPage", scenarios: [2, 3]}
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
    if (item.targetPage == "GoalPage") {
      console.log('GoalPage identified')
      let goal = {
        deadline: moment().add(92, 'days'),
        items: ['Loose 5 pounds', 'Not miss more than 1 DOAC dose', '', '', '']        
      };
      this.navCtrl.push(item.targetPage, {goal: goal});
    } else
      this.navCtrl.push(item.targetPage);
  }

}

