import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Chart } from 'chart.js';
import 'chartjs-plugin-datalabels';

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

  @ViewChild('peerCanvas') peerCanvas;
  @ViewChild('overallCanvas') overallCanvas;
  @ViewChild('detailedCanvas') detailedCanvas;

  protected overallChart : any;
  protected detailedChart : any;
  protected drugsChart : any;

  items = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.items = [
      {title: 'Adherence Scores', color: 'custom_1'},
      {title: 'Medication Adherence', color: 'custom_2'},
      {title: 'Diet Adherence', color: 'custom_3'},
      {title: 'Engagement Actions', color: 'custom_4'},
    ];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WeeklySummaryPage');

    // Average engagement -- patient vs. peers
    this.peerCanvas = new Chart(this.peerCanvas.nativeElement, {
      type: 'horizontalBar',
      data: {
        labels: ['You', 'Peers'],
        datasets: [{
          label: 'Average Weekly Engagement',
          data: [68, 77],
          backgroundColor: ['rgba(34,139,34,0.6)', 'rgba(138,43,226,0.6)'],
          borderColor: ['rgba(34,139,34,1)', 'rgba(138,43,226,1)'],
          borderWidth: 1          
        }],        
      },
      options: {
        scales: {
          xAxes: [{
            ticks: {min: 0, max: 100}            
          }]
        },
        legend: {
          display: false
        },
        plugins: {
					datalabels: {
						color: 'white',
						font: {
							weight: 'bold'
						},
            formatter: Math.round,
            anchor: 'center',
					}
				},
      }
    });

    this.overallChart = new Chart(this.overallCanvas.nativeElement, {
      type: 'line',
      data: {
        labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
        datasets: [
          {
            fill:false,
            label: 'Engagement',
            data: [23, 62, 75, 60, 67, 93, 95],
            backgroundColor: 'rgba(34,139,34, 0.6)',
            borderColor: 'rgba(34,139,34,0.8)'
          },
          {
            fill:false,
            label: 'Overall Feeling',
            data: [60, 50, 70, 60, 60,70, 60],
            backgroundColor: 'rgba(210,105,30,0.8)',
            borderColor: 'rgba(210,105,30,0.6)',
        },
        ]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {min: 0, max: 100}
          }]
        },
        plugins: {
					datalabels: {
						color: 'white',
						font: {
							weight: 'bold'
						},
            formatter: Math.round,
            borderRadius: 4,
            backgroundColor: function(context) {
							return context.dataset.backgroundColor;
						},
					}
				},
      }
    });

      this.detailedChart = new Chart(this.detailedCanvas.nativeElement, {
      type: 'horizontalBar',
      data: {
        labels: ['Treatment', 'Diet', 'Symptom Reporting', 'Education', 'Behavior Modification'],
        datasets: [
          {
            label: 'Average Weekly Ratings',
            data: [89, 57, 62, 74, 57],
            borderColor: ['rgba(218,165,32,0.6)', 'rgba(178,34,34,0.6)', 'rgba(106,90,205,0.6)', 'rgba(255,99,71,0.6)', 'rgba(139,69,19,0.6)'],
            backgroundColor: ['rgba(218,165,32,1)', 'rgba(178,34,34,1)', 'rgba(106,90,205,1)', 'rgba(255,99,71,1)', 'rgba(139,69,19,1)'],
            borderWidth: 1
          }
        ]
      },
      options: {
        scales: {
          xAxes: [{
            ticks: {min: 0, max: 100}
          }]
        },
        legend: {
          display: false
        },
        plugins: {
					datalabels: {
						color: 'white',
						font: {
							weight: 'bold'
						},
            formatter: Math.round,
            anchor: 'center',
					}
				},
      }
    });

    // this.detailedChart = new Chart(this.detailedCanvas.nativeElement, {
    //   type: 'bar',
    //   data: {
    //     labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    //     datasets: [
    //       {
    //         label: 'Treatment',
    //         data: [75, 100,100, 75, 100, 100, 75],
    //         borderColor: '#FE1200',
    //         backgroundColor: 'rgba(255, 255, 255,0.0)',
    //         borderWidth: 1
    //       },
    //       {
    //         label: 'Diet',
    //         data: [0, 100, 100, 0, 0, 100, 100],
    //         borderColor: '#132311',
    //         backgroundColor: 'rgba(255, 255, 255,0.0)',
    //         borderWidth: 1
    //       },
    //       {
    //         label: 'Symptom',
    //         data: [0, 67, 67, 100, 33, 67, 100],
    //         borderColor: '#852312',
    //         backgroundColor: 'rgba(255, 255, 255,0.0)',
    //         borderWidth: 1
    //       },
    //       {
    //         label: 'Education',
    //         data: [42, 42, 58, 75, 100, 100, 100],
    //         borderColor: '#857983',
    //         backgroundColor: 'rgba(255, 255, 255,0.0)',
    //         borderWidth: 1
    //       },
    //       {
    //         label: 'Behavior modification',
    //         data: [0, 0, 50, 50, 100, 100, 100],
    //         borderColor: '#074621',
    //         backgroundColor: 'rgba(255, 255, 255,0.0)',           
    //         borderWidth: 1
    //       }
    //     ]
    //   },
    //   options: {
    //     scales: {
    //       yAxes: [{
    //         ticks: {beginAtZero: true}
    //       }]
    //     }
    //   }
    // });


  // this.drugsChart = new Chart(this.drugsCanvas.nativeElement, {
  //   type: 'doughnut',
  //   data: {
  //     labels: ['Medications', ''],
  //     datasets: [{
  //       data: [40, 60],
  //       backgroundColor: ['#ff0000', '#ffffff']
  //     }]
  //   }
  // });
  }
}
