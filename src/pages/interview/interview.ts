import { Material } from './../../enums/enums';
import { DataProvider } from './../../providers/data/data';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the InterviewPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-interview',
  templateUrl: 'interview.html',
})
export class InterviewPage {

  public items = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, protected dataService : DataProvider) {
    this.items = [
      {id: Material.InterviewQA1, question: 'Do you have any obstacles from compliance?',  
      answer: 'Compliance has never been an issue for me, I take regularly my pills. I know that during a chronic treatment it is important to avoid big changes in drug concentration in our body, and this is just what happens when you skip doses. I want to be protected by the drug during the whole day, it’s my convenience.'},
      {id: Material.InterviewQA2, question: 'Did you get your knowledge from physicians?',  
      answer: 'Nobody gave me explanations about drugs and about the importance of compliance. I recognize that this is an issue for many patients, and I would have appreciated more explanations from my doctors. On the other hand, whenever I asked to doctors, they provided satisfactory answers (this is to say that doctors are not proactive in giving spontaneous explanations).'},
      {id: Material.InterviewQA3, question: 'Why did you have the ablation procedure?',  
      answer: 'Amiodarone shows a long-term toxicity (<i>this is an information that Michele knows, but the most of patients do not</i>). I am getting old, and I would like to avoid damaging my liver or my kidneys, that would be a big problem in some years. AFib symptoms were worsening. I had a couple of episodes with associated severe dizziness  that also led to hospital admission. Also my wife was becoming stressed for those episodes. Multiple drug regimen in the long term caused a continuous sense of fatigue. Ablation is a surgical intervention, and if it is my last chance to recover from AF symptoms, it’s better to do it now (<i>Michele is 78 years old</i>).'},
      {id: Material.InterviewQA4, question: 'Does dietary care bother you?',  
      answer: ' I have been abundantly and very carefully informed by doctors and nurses (specialized about OACs - oral anticoagulants) on green leaf foods, lentils, cauliflower, broccoli, asparagus, etc. Consequently, except for lettuce, broccoli and asparagus, which I banished from the table, I eat habitually other vegetables included beans, taking care to vary the type but not the quantity, to keep the vitamin K intake range quite uniform. It goes without saying that the diet does not bother me.'},
      {id: Material.InterviewQA5, question: 'Do you fear AFib episodes?',  
      answer: 'More than fear is the hassle of having to endure fibrillation, while fear is linked to a possible episode of TIA (transient ischemic attack) and hence the thought goes to the effective pharmacological coverage.  Unfortunately, the onset of AF symptoms is unpredictable, it may happen during day or night, I daily use the blood pressure device to check not only the pressure but also the heartbeats (sometime episodes are asymptomatic). When a symptomatic episode ends, I only think about recovering to normal and happy life!'},
      {id: Material.InterviewQA6, question: 'Did your symptoms improve after the ablation?',  
      answer: 'This aspect improved a lot, I do not think so much to AF because the symptoms, after ablation, do not appear (at least until now), so the daily life is no more compromised.'},
      {id: Material.InterviewQA7, question: 'What does it mean to you to be engaged in your treatment?',  
      answer: ' It means to have counseling and explanations by my caregivers and understand the mechanisms of the disease and of the treatment, in such a way that I may face the problems more efficiently, and solve the minor problems by myself. I also like very much to be involved in research projects and to experiment new devices. Now that I am retired, this reminds me of the time I worked (<i>Michele was a technician in an otolaryngology ward</i>).'},

    ];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InterviewPage');
    this.dataService.addSeenMaterial(Material.Interview);
  }

  openInterviewDetailPage(item) {
    this.navCtrl.push("InterviewDetailPage", {item: item});    
  }
}
