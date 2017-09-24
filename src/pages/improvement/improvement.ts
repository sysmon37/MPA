import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Navbar } from 'ionic-angular';

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

  @ViewChild(Navbar) navBar : Navbar;

  drugs : any = null;
  nutrients : any = null;
  symptoms : any = null;

  pending : any = [];
  numPending : number = 0;

  showDrugs : boolean = false;
  showNutrients : boolean = false;
  showSymptoms : boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.drugs = navParams.get('drugs');
    this.nutrients = navParams.get('nutrients');
    this.symptoms = navParams.get('symptoms');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ImprovementPage');
    this.collectPendingQuestions();
    this.updateVisibility();
    this.navBar.backButtonClick = () => {
      for (let item of this.pending)
        item.value = '?';
      this.navCtrl.pop();
    }
  }

  submit() {
    this.navCtrl.pop();
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

    this.numPending = this.pending.length;
    
    this.showNextPendingQuestion();
  }

  showNextPendingQuestion() {
    if (this.numPending > 0) {
      this.pending[this.pending.length - this.numPending].visible = true;
      this.numPending--;
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
  }

}
