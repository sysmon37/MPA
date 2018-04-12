import { Material } from './../../enums/enums';
import { DataProvider } from './../../providers/data/data';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the EducationPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-education',
  templateUrl: 'education.html',
})


export class EducationPage {
  protected itemGroups = [];
  protected scenario = null;
  protected highlighted = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, private dataService: DataProvider) {
    this.scenario = this.dataService.getScenario();

    this.itemGroups = [
      { 
        title: 'Lifestyle',
        items: [
          {targetPage: "EducationDetailPage", title: 'Diet', disabled: 0, scenarios: [1, 2], content: '<p>Some foods - even healthy ones - can make certain anticoagulants less effective. If you have been prescribed warfarin, then you should be aware that it can become less effective when foods are consumed that are high in vitamin K. These dietary modifications are not an issue with direct oral anticoagulants because they work by a different mechanism and do not generally have food interactions.<p><p>Vitamin K is found in the following foods:<ul><li>Green leafy vegetables, such as kale, spinach, turnip greens, collards, Swiss chard, mustard greens, parsley, romaine, and green leaf lettuce,</li><li>Vegetables such as Brussels sprouts, broccoli, cauliflower, and cabbage,</li><li>Fish, liver, meat, eggs, and cereals (smaller amounts).</li></ul></p><p>Eating high levels of such foods can counteract the medication’s effectiveness. However, your doctor may recommend that rather than eliminating them from your diet, you eat consistent amounts of these foods each day and have your warfarin dosage adjusted to take that into consideration.</p>'},
          {targetPage: "EducationDetailPage", title: 'Exercise', scenarios: [0, 1, 2]}
        ]
      },
      { 
        title: 'Self-care',
        items: [
          {targetPage: "EducationDetailPage", title: 'Risky events', scenarios: [0, 1, 2]},
          {targetPage: "EducationDetailPage", title: 'Stress', scenarios: [1, 2], content: '<p>For some people, stressful events can trigger an episode of atrial fibrillation. Although you cannot prevent stress from ever entering your life, you can control how you think about the stressful event and this can impact how it affects your health.</p><p>Be physically active. Regular low-impact, moderate exercise reduces both anxiety and depression.</p><p>Identify and use your support networks. Talk to friends and family.</p>'},
          {targetPage: "EducationDetailPage", title: 'Sports', scenarios: [0, 1, 2]},
          {targetPage: "EducationDetailPage", title: 'Travel', scenarios: [0, 1, 2]}          
        ]
      },
      { 
        title: 'Engagement',
        items: [
          {targetPage: "EducationDetailPage", title: 'Being engaged', scenarios: [1, 2], content: '<p>Being engaged in your healthcare means:</p><ol><li><b>Ownership</b> - taking the lead role in your health and healthcare decisions, including treatment of AFib. You will understand when you need to consider changing or modifying your treatment and talk to your doctor about it and what you should be watching or and noting as you manage your health.</li><li><b>Informed decision-making</b> - educating yourself about your condition so that you can make informed choices about treating your Afib. You will be in charge of seeking information about the disease, its possible treatments and risks of deviations from them (i.e., non-adherence), monitoring when your health state changes and making informed choices. </li><li><b>Commitment</b> – being continuously involved and consistently taking steps to manage your AFib. You will be spending 3 minutes a day before going to bed reflecting on whether you have been taking your medications as directed or experienced any AFib symptoms. Then, once a week, you will summarize to yourself if you have observed some change in your health, and if so, act upon it.</li></ol><p></p>'},
          {id: Material.Interview, targetPage: "InterviewPage", title: 'Interview with an AFib patient', scenarios: [2]},
          {id: Material.Barriers, targetPage: "EducationDetailPage", title: 'Barriers to engagement', scenarios: [2], content: '<ul><li>Lack of positive reinforcement</li><li>Inadequate support from family or friends</li><li>Inadequate support from family or friends</li><li>Lack of daily routine</li><li>Inadequate communication with healthcare provider(s)</li><li>Insufficient understanding of treatment and required lifestyle changes</li><li>Lack of willpower</li><li>Time commitment required for engaging and for using the app</li></ul>'},
        ]
      },     
      { 
        title: 'Facts on AFib',
        items: [
          {targetPage: "EducationDetailPage", title: 'Causes of AFib', disabled: 0, scenarios: [1, 2, 3], image: './assets/afib.png', content: 'AFib is an alteration of the heart rhythm in which the heart area that normally controls the electrical activation (the <i>sinus node</i>) is <i>overwhelmed</i> by the activity of other parts of the right atrium or left atrium (the atria are the upper chambers of the four chambers that make up the heart). As a result the electrical activity of the atria becomes completely chaotic and the heartbeat (pulse) becomes irregular.'},
          {targetPage: "EducationDetailPage", title: 'Symptoms of AFib', disabled: 0, scenarios: [1, 2, 3], content: 'The main symptoms experienced by people suffering from AFib are palpitations, or the feeling of an irregular, accelerated heartbeat. Other symptoms include shortness of breath (at rest or during exercise), dizziness, syncope (i.e., loss of consciousness for a few seconds with spontaneous recovery), fatigue, and tiredness. Angina pectoris (chest pains) can also occur.'},
          {targetPage: "EducationDetailPage", title: 'Consequences of AFib', disabled: 0, scenarios: [1, 2, 3], content: 'Apart from a few exceptional cases, AFib is an arrhythmia that does not pose a risk to life. However, its complications can be very serious. Indeed, importantly, since AFib often occurs in association with other heart (cardiac) or extra-cardiac diseases (for example, valvular defects, heart chamber enlargement, coronary artery disease, diabetes, hypertension). Thus, the clinical evolution depends also on the so-called <i>co-morbidities</i> (i.e., the <i>other</i> heart diseases). AFib is a cause of cardiovascular complications (for example, it can aggravate heart failure), and it causes a reduction in tolerance to physical activity. However, the most severe complication is caused by stagnation of blood in the atrial chambers (due to the loss of coordinated contraction). This promotes the formation of blood clots (thrombi) on the walls of the atrium. If the blood clot detaches it is often dragged by the blood flow to the arteries of the brain (due to anatomical reasons) so they can become clogged causing a stroke. For this reason, patients with AFib are commonly treated with anticoagulant drugs.'},
          {targetPage: "EducationDetailPage", title: 'Prevalence ofAFib', disabled: 0, scenarios: [1, 2, 3], content: 'AFib is the most common cardiac arrhythmia (about 0.5% in the general adult population). The risk of disease increases with age - prevalence of AFib in  patients over 65 year old rises to 5% or more. Rarely AFib occurs in patients in whom the heart is structurally intact (that is, they have no other demonstrable heart disease). These cases represent approximately 10-15% of all AFib patients and can be caused by genetic defects (mutations) and may present familial distribution (that is, this condition “runs in the family”). In most cases however the arrhythmia occurs in patients who have other cardiovascular diseases such as hypertension, coronary artery disease and diseases affecting the valves of the heart (valvular disease). For example, 30%-80% of patients who are operated on for mitral valve disease have AFib. AFib also commonly occurs after all types of cardiac surgery. In these cases, if the diameter of the atria is normal, the arrhythmia almost always disappears after few days.'},
          {targetPage: "EducationDetailPage", title: 'Types of AFib', disabled: 0, scenarios: [1, 2, 3], content: 'After a first episode of AFib it is very important to distinguish whether the arrhythmia was spontaneous (normal heart) or induced by other causes. A careful analysis of symptoms can be of help. Of note, not all episodes of AFib are felt/noticed by patients. This can make diagnosis difficult. In patients in whom there were at least two episodes of AFib with spontaneous return to sinus rhythm within seven days, AFib is called <i>paroxysmal</i> (sometimes referred to as <i>recurrent</i>). If the episodes last more than 7 days and/or a medical intervention is necessary to restore the normal heart rhythm, AFib is classified as <i>persistent</i>. In cases where medical interventions are ineffective and AFib persists more than 7 days arrhythmia is defined as <i>permanent</i>. Of note these categories are not mutually exclusive since a patient may experience transitions from one category to another.'},
          {targetPage: "EducationDetailPage", title: 'Treatment strategies', disabled: 0, scenarios: [1, 2, 3], content: 'There are two main treatment strategies: cardioversion, which is the attempt to restore the normal <i>sinus</i> rhythm (<i>rhythm control strategy</i>) or control of heart rate (<i>rate control strategy</i>). The rhythm control strategy, if effective, allows minimizing the symptoms and risks described above. It also enables discontinuation of the administration of anticoagulant drugs. The maintenance of sinus rhythm, however, is often difficult or impossible, especially when ultrasound shows an increase in the diameter of the atria. The possibilities of treatment are focused on the use of antiarrhythmic drugs (pills) or radiofrequency ablation.'},               
          {targetPage: "EducationDetailPage", title: 'Radio-frequency ablation', disabled: 0, scenarios: [1, 2, 3], content: 'Radio-frequency ablation (RFA) is an invasive procedure aimed at creating thin scars in the atria in order to interrupt the arrhythmia. The idea is that by creating these scars (using radio waves) the electrical conduction of the arrhythmias is made impossible. There are different ways of performing RFA but all of them require inserting a wire (catheter) in the right and left atria.  The catheters are usually inserted through the femoral vein and femoral artery (other approaches can be used). The doctor first records a map of the electrical activation of the atria to select the best zone to apply the RF energy. Than he/she deliver a series of electrical impulses and re-checks the electrical activation map to assess the effects of the RFA treatment.  At the end of the procedure the doctor tries to induce AFib to demonstrate that the arrhythmia is no longer inducible. In some instances the ablation is not complete and the arrhythmias can recur even if the initial result of RFA is satisfactory.'},  
          {targetPage: "EducationDetailPage", title: 'Treatment efficacy', disabled: 0, scenarios: [1, 2, 3], content: 'The most important concept to consider is that the efficacy of the treatment depends on the cardiac co-morbidities. For example, treatment is more effective for AFib occurring in the structurally normal heart than for one occurring in patients with valvular heart disease and with enlarged atria diameter. Therefore treating the cause of AFib is at least as important as treating the arrhythmia.  Neither drugs nor ablation are completely effective and the possibility of recurrent AFib is between 40% and 50%. Ablation technique has made remarkable advancements in the last few years. However for several patients rate control strategy is the only feasible option. In such instances the correct use of drugs to optimize the cardiac rate (at rest and during exercise) and the administration of anticoagulants is extremely important to improve the patient’s  quality of life.'},                                   
        ]
      },
     { 
      title: 'Facts on Anticoagulation',
      items: [
        {targetPage: "EducationDetailPage", title: 'Importance of anticoagulation', scenarios: [1, 2], content: 'AFib is a cause of cardiovascular complications (for example, it can aggravate heart failure), and it causes a reduction in tolerance to physical activity. However, the most severe complication is caused by stagnation of blood in the atrial chambers (due to the loss of coordinated contraction). This promotes the formation of blood clots (thrombi) on the walls of the atrium. If the blood clot detaches it is often dragged by the blood flow to the arteries of the brain (due to anatomical reasons) so they can become clogged causing a stroke. For this reason, patients with AFib are commonly treated with anticoagulant drugs.'},
        {targetPage: "EducationDetailPage", title: 'Direct acting oral anticoagulants (DOACs) and  warfarin', scenarios: [1, 2], content: 'The <i>direct acting oral anticoagulants</i> (DOACs) are used in anticoagulation therapy and include Dabigatran (Pradaxa), Rivaroxaban (Xarelto), and Apixaban (Eliquis). They are  sometimes also called <i>novel oral anticoagulants</i> (NOACs). DOACs are similar to warfarin in most clinical outcomes. They were shown to have reduced risk of causing an intracranial hemorrhage compared with warfarin.  However, the main advantage of taking the DOACs is that there is no current requirement for routine monitoring of their anticoagulation effects.'},
        {targetPage: "EducationDetailPage", title: 'DOACs and other medications', scenarios: [1, 2], content: '<p>It is possible to take DOACs with low-dose ("baby") aspirin, however such combination increases risk of bleeding.</p><p>Patients who are on the antiplatelet therapy (to reduce risk of stroke or heart disease) and take medications such as Clopidogrel, Prasugrel, or Ticagrelor should consult their doctor as soon as possible because combined DOAC and antiplatelet therapy is usually not recommended.</p>'},
        {targetPage: "EducationDetailPage", title: 'Chronic kidney disease', scenarios: [1, 2], content: 'Dosage of the DOACs has to be changed for patients with impaired renal function Dabigatran and Rivaroxaban are not recommended for patients with severe reduction of their renal function while a lower dosage of Apixaban is possible. Physician needs to be consulted for a revised dosage for patients with mild to moderate renal impairment.'},
        {targetPage: "EducationDetailPage", title: 'Antithrombotic effect of DOACs', scenarios: [1, 2], content: 'Good adherence to antithrombotic therapy is key when takings DOACs. In general the antithrombotic effect of the DOACs decreases rapidly 12 to 24 hours after the last dose. Such quick rate of decrease of DOACs effect may be an advantage when preparing for surgical procedures where the surgeon wishes to stop the drug in advance, it also represents a problem if adherence is poor. Thus, it is extremely important to take DOACs regularly otherwise risk of a thrombotic event (stroke, heart attack) is unnecessarily increased.'},
      ]
     }      
    ];

    this.highlighted = this.navParams.get("highlighted") ? true : false;

    for(let group of this.itemGroups) {
      for (let item of group.items) 
        if (item.groupTitle === undefined) item.groupTitle = group.title;      
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EducationPage');
    console.log("highlighted = " + this.highlighted);
  }

  openItemDetailPage(item) {
    let params = null;
    if (item.targetPage == "EducationDetailPage")
      params = {item: item};
    else
      params = {highlighted: this.highlighted}

    this.navCtrl.push(item.targetPage, params);
  }

  color(item) {
    if (this.highlighted && item.id != null && this.dataService.getSeenMaterials().indexOf(item.id) == -1)
      return "secondary";
    else
      return "";
  }

  minScenario(scenarios) {
    return scenarios.length == 0 ? 0 :  Math.min(...scenarios);
  }
}
