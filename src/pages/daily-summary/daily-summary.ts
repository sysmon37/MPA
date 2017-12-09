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

  wellbeing : number = 0;
  drugs : any  = [];
  symptoms : any = [];
  nutrients : any = [];

  showDrugs : boolean = true;
  showSymptoms : boolean = true;
  showNutrients : boolean = true;

  engagementScore : number = 0;

  doUpdate : boolean = false;

  stars : boolean[] = [false, false, false, false, false, false];

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
        {id: Nutrient.VitaminK, title: 'Vitamin K', value: '?'}
      ];

      this.dataService.getDrugs().then((data) => this.dataService.unpackMultiValues(data, this.drugs));
      this.dataService.getSymptoms().then((data) => this.dataService.unpackValues(data, this.symptoms));
      this.dataService.getNutrients().then((data) => this.dataService.unpackValues(data, this.nutrients));      

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
    
    submit() {
        this.navCtrl.pop();
        console.log("wellbeing: " + this.wellbeing);

        this.dataService.setDrugs(this.dataService.packMultiValues(this.drugs));
        this.dataService.setSymptoms(this.dataService.packValues(this.symptoms));
        this.dataService.setNutrients(this.dataService.packValues(this.nutrients));
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

    updateVisibility() {
        this.showDrugs = false;
        for (let dr of this.drugs) {
            dr.value = '?';
            for (let d of dr.doses) {
                if (d.value != '?') dr.value = '*';
            }
            if (dr.value != '?') this.showDrugs = true;
        }

        this.showSymptoms = false;
        for (let s of this.symptoms) {
            if (s.value != '?') this.showSymptoms = true;
        }

        this.showNutrients = false;
        for (let n of this.nutrients) {
            if (n.value != '?') this.showNutrients = true;
        }
    }

    updateEngagementScore() {
        this.engagementScore = 0;
        for (let dr of this.drugs) 
            for (let d of dr.doses) 
                if (d.value == '+') 
                    this.engagementScore++;
        for (let n of this.nutrients)
            if (n.value == '=') 
            this.engagementScore++;
        for (let s of this.symptoms)
            if (s.value != '?') {
                this.engagementScore++;
                break;
            }
        for (let i in this.stars)
            this.stars[i] = +i < this.engagementScore;
    }

    improveEngagement() {
        this.doUpdate = true;
        this.navCtrl.push("ImprovementPage", {drugs: this.drugs, nutrients: this.nutrients, symptoms: this.symptoms});
    }
}
