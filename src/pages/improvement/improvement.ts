import { DataProvider } from './../../providers/data/data';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ImprovementPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-improvement',
  templateUrl: 'improvement.html',
})
export class ImprovementPage {

  protected drugs : any = null;
  protected nutrients : any = null;
  protected symptoms : any = null;
  protected buttons  = [];

  protected pending : any = [];
  protected pendingCount : number = 0;

  protected showDrugs : boolean = false;
  protected showNutrients : boolean = false;
  protected showSymptoms : boolean = false;

  protected showButtons : boolean[] = [false, false];

  constructor(public navCtrl: NavController, public navParams: NavParams, private dataService: DataProvider) {
    this.drugs = navParams.get('drugs');
    this.nutrients = navParams.get('nutrients');
    this.symptoms = navParams.get('symptoms');

    this.buttons = [
      {title: "Patient Education", iconName: "book", targetPage: "EducationPage"},
      {title: "Behavior Change", iconName: "body", targetPage: "BehaviorChangePage"},
    ];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ImprovementPage');
    this.collectPendingQuestions();    
  }

  ionViewDidEnter() {
    console.log('ionViewDidEnter ImprovementPage');    
    this.updateVisibility();
  }

  valueChanged(item, value) {
    item.value = value;
    this.showNextPendingQuestion();
  }

  collectPendingQuestions() {
    this.pending = [];
    
    for (let dr of this.drugs)
      for (let d of dr.doses) {
        d.visible = false;
        if (d.value == '?') 
          this.pending.push(d);
      }
    
      for (let n of this.nutrients) {
      n.visible = false;
      if (n.value == '?') 
        this.pending.push(n);
    }
    
    for (let s of this.symptoms) {
      s.visible = false;
      if (s.value == '?') 
        this.pending.push(s);
    }

    this.pendingCount = this.pending.length;
    
    this.showNextPendingQuestion();
  }

  showNextPendingQuestion() {
    if (this.pendingCount > 0) {
      this.pending[this.pending.length - this.pendingCount].visible = true;
      this.pendingCount--;
      this.updateVisibility();
    }
  }

  updateVisibility() {
    for (let dr of this.drugs)
      for (let d of dr.doses)
        if (d.visible) {
          this.showDrugs = true;
          break;
        }
    for (let n of this.nutrients) 
        if (n.visible) {
          this.showNutrients = true;
          break;
        }
    for (let s of this.symptoms) 
      if (s.visible) {
        this.showSymptoms = true;
        break;
      }
    this.showButtons[0] = this.dataService.isAnyMaterialToSee();
    this.showButtons[1] = this.dataService.isAnyActionToInvoke();

    if (!this.showDrugs && !this.showNutrients && !this.showSymptoms && this.showButtons.indexOf(true) == -1)
      this.navCtrl.pop();
  }

  openItemDetailPage(item) {
    this.navCtrl.push(item.targetPage, { highlighted: true });
  }

}
