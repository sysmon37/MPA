import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Chart } from 'chart.js';

/**
 * Generated class for the WeeklySummaryPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-weekly-summary',
  templateUrl: 'weekly-summary.html',
})
export class WeeklySummaryPage {

  @ViewChild('overallCanvas') overallCanvas;
  @ViewChild('drugsCanvas') drugsCanvas;
  overallChart : any;
  drugsChart : any;

  items = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.items = [
      {title: 'Compliance Scores', color: 'custom_1'},
      {title: 'Medication Compliance', color: 'custom_2'},
      {title: 'Diet Compliance', color: 'custom_3'},
      {title: 'Engagement Actions', color: 'custom_4'},
    ];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WeeklySummaryPage');

    this.overallChart = new Chart(this.overallCanvas.nativeElement, {
      type: 'line',
      data: {
        labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
        datasets: [{
          label: 'Overall feeling',
          data: [65, 46, 67, 60, 62, 69, 65],
          borderColor: '#00FF00',
          backgroundColor: 'rgba(255, 255, 255,0.0)',
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {beginAtZero: true}
          }]
        }
      }
    });

  this.drugsChart = new Chart(this.drugsCanvas.nativeElement, {
    type: 'doughnut',
    data: {
      labels: ['Medications', ''],
      datasets: [{
        data: [40, 60],
        backgroundColor: ['#ff0000', '#ffffff']
      }]
    }
  });
  }
}
