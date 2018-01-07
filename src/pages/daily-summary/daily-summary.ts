import { DataProvider } from './../../providers/data/data';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Treatment } from '../../enums/enums';
import { Symptom } from '../../enums/enums';
import { Nutrient } from '../../enums/enums';


/**
 * Generated class for the DailySummaryPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-daily-summary',
  templateUrl: 'daily-summary.html',
})
export class DailySummaryPage {

  protected wellbeing : number = 0;
  protected drugs  = [];
  protected symptoms = [];
  protected nutrients  = [];

  protected showDrugs : boolean = false;
  protected showSymptoms : boolean = false;
  protected showNutrients : boolean = false;

  protected showImprovement : boolean = false;

  protected engagementScore : number = 0;

  protected doUpdate : boolean = false;

  protected stars : number[] = [0, 0, 0, 0, 0];

  readonly DRUG : string = 'drug';
  readonly SYMPTOM : string = 'symptom';
  readonly NUTRIENT : string = 'nutrient';

  constructor(public navCtrl: NavController, public navParams: NavParams, public dataService: DataProvider) {
      this.drugs = [
          {id: Treatment.Anticoagulant, title: "Dabigatran", description: 'Capsule, 150 mg, 2 x daily', imageUrl: '/assets/dabigatran-2x.jpg', value: '', doses: [{value: '?'}, {value: '?'}]},
          {id: Treatment.RateControl, title: "Metoprolol", description: 'Tablet, 25 mg, 2 x daily', imageUrl: '/assets/metoprolol-2x.jpg', value: '', doses: [{value: '?'}, {value: '?'}]}
      ];

      this.symptoms = [
        {id: Symptom.Palpitation, title: 'Palpitation', value: '?'},
        {id: Symptom.ChestPain, title: 'Chest pain', value: '?'},
        {id: Symptom.Dyspnea, title: 'Shortness of breath', value: '?'},  
      ];

      this.nutrients = [
        {id: Nutrient.Minerals, title: 'Minerals', description: 'Magnesium and potassium', value: '?'}
      ];

      this.dataService.unpackMultiValues(this.dataService.getDrugs(), this.drugs);
      this.dataService.unpackValues(this.dataService.getSymptoms(), this.symptoms);
      this.dataService.unpackValues(this.dataService.getNutrients(), this.nutrients);      

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DailySummaryPage');
  }

  ionViewDidEnter(){
    if (this.doUpdate) {
        this.dataService.setDrugs(this.dataService.packMultiValues(this.drugs));
        this.dataService.setSymptoms(this.dataService.packValues(this.symptoms));
        this.dataService.setNutrients(this.dataService.packValues(this.nutrients));
    }
    this.updateVisibility();    
    this.updateEngagementScore();    
  }
    
    iconName(value, type) {
        let name = '';
        if (value == '' || value == '?')
            name = 'help';
        else
            switch (type) {
                case this.DRUG:
                    name = value == '+' ? 'checkmark' : 'close';
                    break;
                case this.SYMPTOM:
                    name = value == '+' ? 'add' : 'remove';
                    break;
                case this.NUTRIENT:
                    name = value == '+' ? 'arrow-round-up' : value == '-' ? 'arrow-round-down' : 'checkmark';
            }
        return name;
    }

    color(value, type) {
        let color = '';
        if (value == '?' || value == '')
            color = 'unknown';
        else
            switch (type) {
                case this.DRUG:
                    color = value == '+' ? 'safe' : 'danger';
                    break;
                case this.SYMPTOM:
                    color = 'light_blue';
                    break;
                case this.NUTRIENT:
                    color = value == '=' ? 'safe' : 'danger';                    
        }
        return color;
    }

    starName(value) {
        switch(value) {
            case 0.0: return "star-outline";
            case 0.5: return "star-half";
            default: return "star"
        }
    }

    updateVisibility() {
        this.showImprovement = false;

        this.showDrugs = false;        
        for (let dr of this.drugs) {
            dr.value = '?';
            for (let d of dr.doses) 
                if (d.value != '?')
                    dr.value = '*';
                else
                    this.showImprovement = true;
            if (dr.value != '?') 
                this.showDrugs = true;
        }

        this.showSymptoms = false;
        for (let s of this.symptoms) {
            if (s.value != '?') 
                this.showSymptoms = true;
            else
                this.showImprovement = true;
        }

        this.showNutrients = false;
        for (let n of this.nutrients) {
            if (n.value != '?') 
                this.showNutrients = true;
            else
                this.showImprovement = true;
        }

        if (this.dataService.isAnyMaterialToSee() || this.dataService.isAnyActionToInvoke())
            this.showImprovement = true;
    }

    updateEngagementScore() {
        this.engagementScore = 0;

        let count = 0;
        
        let total = 0;
        for (let dr of this.drugs) {
            total += dr.doses.length;
            for (let d of dr.doses) 
                if (d.value == '+') 
                    count++;
        }
        let score1 = 1.0*count/total;
        console.log("Treatment-based score = " + score1);
        this.engagementScore += score1;

        count = 0;
        for (let n of this.nutrients)
            if (n.value == '=') 
                count++;
        let score2 = count/this.nutrients.length;
        console.log("Diet-based score = " + score2);
        this.engagementScore += score2;
        
        count = 0;
        for (let s of this.symptoms)
            if (s.value != '?') {
                count++;
            }
        let score3 = count/this.symptoms.length;
        console.log("Symptom-based score = " + score3);
        this.engagementScore += score3;

        let score4 = this.dataService.getSeenMaterials().length/this.dataService.getMaterialCount();
        console.log("Education-based score = " + score4);
        this.engagementScore += score4;

        let score5 = this.dataService.getInvokedActions().length/this.dataService.getActionCount();
        console.log("Action-based score = " + score5);
        this.engagementScore += score5;

        this.engagementScore /= 5.0;
        console.log("Engagement score = " + this.engagementScore);

        this.engagementScore = Math.round(this.engagementScore*100.0);
        console.log("Rescaled engagement score = " + this.engagementScore);

        let starScore = 0;
        for (let i in this.stars) {
            starScore += 20;
            if (this.engagementScore >= starScore)
                this.stars[i] = 1.0;
            else if (this.engagementScore >= starScore - 10)
                this.stars[i] = 0.5;
            else
                this.stars[i] = 0.0;
        }
        console.log(this.stars);
    }

    improveEngagement() {
        this.doUpdate = true;
        this.navCtrl.push("ImprovementPage", {drugs: this.drugs, nutrients: this.nutrients, symptoms: this.symptoms});
    }
}
