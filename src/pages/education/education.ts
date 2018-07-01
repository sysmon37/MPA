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
  protected scenario = 1;
  protected highlighted = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, private dataService: DataProvider) {
    this.scenario = this.dataService.getScenario();

    this.itemGroups = [
      { 
        title: 'Lifestyle',
        items: 
          this.dataService.getTherapyType() == 1 ? [
            {targetPage: "EducationDetailPage", title: 'Should I watch my diet?', disabled: 0, scenarios: [1, 2], content: '<p>Some foods - even healthy ones can make warfarin less effective especially if your diet includes foods that are high in vitamin K. Vitamin K is found in the following foods:<ul><li>Green leafy vegetables, such as kale, spinach, turnip greens, collards, Swiss chard, mustard greens, parsley, romaine, and green leaf lettuce,</li><li>Vegetables such as Brussels sprouts, broccoli, cauliflower, and cabbage,</li><li>Fish, liver, meat, eggs, and cereals (smaller amounts).</li></ul></p><p>Eating a lot of such foods can counteract the Warfarin effectiveness. However, your doctor may recommend that rather than eliminating them from your diet, you eat consistent amounts of these foods each day and have your warfarin dosage adjusted to take that into consideration.</p>'},
            // {targetPage: "EducationDetailPage", title: 'Exercise', scenarios: [0, 1, 2]}
          ] : [
            {targetPage: "EducationDetailPage", title: 'Should I watch my diet?', disabled: 0, scenarios: [1, 2], content: '<p>DOACs have limited impact on your diet. You should show moderation in drinking alcoholic beverages (for example, only one glass of wine with meal). Moreover, while there is no direct scientific evidence, you should avoid grapefruit juice as it may interfere with DOACs (weaken their effect). Finally, if you have been prescribed dabigatran, you should take this medication with meals to reduce the risk of stomach upset.</p>'},
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
          {targetPage: "EducationDetailPage", title: 'What does it mean to be engaged?', scenarios: [1, 2], content: '<p>Being engaged in the management of your disease means:</p><ol><li><b>Ownership</b> - taking the lead role in your health and healthcare decisions, including treatment of AFib. You will understand when you need to consider changing or modifying your treatment and talk to your doctor about it and what you should be watching or and noting as you manage your health.</li><br/><li><b>Informed decision-making</b> - educating yourself about your condition so that you can make informed choices about treating your Afib. You will be in charge of seeking information about the disease, its possible treatments and risks of deviations from them (i.e., non-adherence), monitoring when your health state changes and making informed choices.</li><br/><li><b>Commitment</b> – being continuously involved and consistently taking steps to manage your AFib. You will be spending 3 minutes a day before going to bed reflecting on whether you have been taking your medications as directed or experienced any AFib symptoms. Then, once a week, you will summarize to yourself if you have observed some change in your health, and if so, act upon it.</li></ol><p></p>'},
          {id: Material.Interview, targetPage: "InterviewPage", title: 'Interview with an AFib patient', scenarios: [2]},
          {id: Material.Barriers, targetPage: "EducationDetailPage", title: 'Barriers to engagement', scenarios: [2], content: '<ul><li>Lack of positive reinforcement</li><li>Inadequate support from family or friends</li><li>Inadequate support from family or friends</li><li>Lack of daily routine</li><li>Inadequate communication with healthcare provider(s)</li><li>Insufficient understanding of treatment and required lifestyle changes</li><li>Lack of willpower</li><li>Time commitment required for engaging and for using the app</li></ul>'},
        ]
      },     
      { 
        // Modifications based on comments from 2018-4-26
        title: 'Facts on AFib',
        items: [
          {targetPage: "EducationDetailPage", title: 'Do I understand AFib?', disabled: 0, scenarios: [1, 2, 3], content: '<p>AFib is an alteration of the heart rhythm in which the heart area that normally controls the electrical activation (the <i>sinus node</i>) is <i>overwhelmed</i> by the activity of other parts of the right or left atrium (the atria are the upper chambers of the four chambers that make up the heart). As a result the electrical activity of the atria becomes completely chaotic and the heartbeat (pulse) becomes irregular.</p><p><b>What are the symptoms of AFib?</b></p><p>The most common  symptom is palpitation, or the feeling of an irregular, accelerated heartbeat. Other symptoms include shortness of breath (at rest or during exercise), dizziness, syncope (i.e., loss of consciousness for a few seconds with spontaneous recovery), fatigue, and tiredness. Also chest pain or pressure may occur.</p><p><b>Note that chest pain or pressure is a medical emergency. You may be having a heart attack - seek medical help (call 911) immediately.</b></p>'},
          // [D] Symptoms of AFib
          // {targetPage: "EducationDetailPage", title: 'Symptoms of AFib', disabled: 0, scenarios: [1, 2, 3], content: 'The main symptoms experienced by people suffering from AFib are palpitations, or the feeling of an irregular, accelerated heartbeat. Other symptoms include shortness of breath (at rest or during exercise), dizziness, syncope (i.e., loss of consciousness for a few seconds with spontaneous recovery), fatigue, and tiredness. Angina pectoris (chest pains) can also occur.'},
          // [D]  Consequences of Afib
          // {targetPage: "EducationDetailPage", title: 'Consequences of AFib', disabled: 0, scenarios: [1, 2, 3], content: 'Apart from a few exceptional cases, AFib is an arrhythmia that does not pose a risk to life. However, its complications can be very serious. Indeed, importantly, since AFib often occurs in association with other heart (cardiac) or extra-cardiac diseases (for example, valvular defects, heart chamber enlargement, coronary artery disease, diabetes, hypertension). Thus, the clinical evolution depends also on the so-called <i>co-morbidities</i> (i.e., the <i>other</i> heart diseases). AFib is a cause of cardiovascular complications (for example, it can aggravate heart failure), and it causes a reduction in tolerance to physical activity. However, the most severe complication is caused by stagnation of blood in the atrial chambers (due to the loss of coordinated contraction). This promotes the formation of blood clots (thrombi) on the walls of the atrium. If the blood clot detaches it is often dragged by the blood flow to the arteries of the brain (due to anatomical reasons) so they can become clogged causing a stroke. For this reason, patients with AFib are commonly treated with anticoagulant drugs.'},
          // [A] Risk of stroke
          {targetPage: "EducationDetailPage", title: 'Am I at risk of stroke?', disabled: 0, scenarios: [1, 2, 3], content: '<p>The most severe complication of AFib is caused by stagnation of blood in the atrial chambers. This promotes the formation of blood clots in a heart. If the blood clot detaches it is often dragged by the blood flow to the arteries of the brain so they can become clogged causing a stroke.</p><p>Risk of stroke depends on a number of factors and it varies between the patients and your doctor will assess it using a number of diagnostic tools. To lower risk of stroke you are prescribed anticoagulant medication.</p><p><b>How can I minimize risk of stroke?</b></p><p>In order to decrease chances of formation of the blood clots physician prescribes so called anticoagulants. "Anti" means against and "coagulate" means to thicken into a gel or solid. Therefore, anticoagulants are often also called blood thinners.</p><p>There are two common types of anticoagulants: vitamin K antagonists such as warfarin (coumadin) and direct acting oral anticoagulants (DOACs) such as apixaban, dabigatran, edoxaban, or rivaroxaban. DOACs are similar to warfarin in most clinical outcomes. They have been shown to have reduced risk of causing an intracranial hemorrhage compared with warfarin. However, the main advantage of taking the DOACs is that there is no requirement for routine monitoring of their anticoagulation effects.</p>.'},
          // [D] Prevalence of AFib
          // {targetPage: "EducationDetailPage", title: 'Prevalence ofAFib', disabled: 0, scenarios: [1, 2, 3], content: 'AFib is the most common cardiac arrhythmia (about 0.5% in the general adult population). The risk of disease increases with age - prevalence of AFib in  patients over 65 year old rises to 5% or more. Rarely AFib occurs in patients in whom the heart is structurally intact (that is, they have no other demonstrable heart disease). These cases represent approximately 10-15% of all AFib patients and can be caused by genetic defects (mutations) and may present familial distribution (that is, this condition “runs in the family”). In most cases however the arrhythmia occurs in patients who have other cardiovascular diseases such as hypertension, coronary artery disease and diseases affecting the valves of the heart (valvular disease). For example, 30%-80% of patients who are operated on for mitral valve disease have AFib. AFib also commonly occurs after all types of cardiac surgery. In these cases, if the diameter of the atria is normal, the arrhythmia almost always disappears after few days.'},
          // [D] Types of AFib
          // {targetPage: "EducationDetailPage", title: 'Types of AFib', disabled: 0, scenarios: [1, 2, 3], content: 'After a first episode of AFib it is very important to distinguish whether the arrhythmia was spontaneous (normal heart) or induced by other causes. A careful analysis of symptoms can be of help. Of note, not all episodes of AFib are felt/noticed by patients. This can make diagnosis difficult. In patients in whom there were at least two episodes of AFib with spontaneous return to sinus rhythm within seven days, AFib is called <i>paroxysmal</i> (sometimes referred to as <i>recurrent</i>). If the episodes last more than 7 days and/or a medical intervention is necessary to restore the normal heart rhythm, AFib is classified as <i>persistent</i>. In cases where medical interventions are ineffective and AFib persists more than 7 days arrhythmia is defined as <i>permanent</i>. Of note these categories are not mutually exclusive since a patient may experience transitions from one category to another.'},
          // [D] Treatment strategies
          // {targetPage: "EducationDetailPage", title: 'Treatment strategies', disabled: 0, scenarios: [1, 2, 3], content: 'There are two main treatment strategies: cardioversion, which is the attempt to restore the normal <i>sinus</i> rhythm (<i>rhythm control strategy</i>) or control of heart rate (<i>rate control strategy</i>). The rhythm control strategy, if effective, allows minimizing the symptoms and risks described above. It also enables discontinuation of the administration of anticoagulant drugs. The maintenance of sinus rhythm, however, is often difficult or impossible, especially when ultrasound shows an increase in the diameter of the atria. The possibilities of treatment are focused on the use of antiarrhythmic drugs (pills) or radiofrequency ablation.'},               
          // [D] Radio-frequency ablation
          // {targetPage: "EducationDetailPage", title: 'Radio-frequency ablation', disabled: 0, scenarios: [1, 2, 3], content: 'Radio-frequency ablation (RFA) is an invasive procedure aimed at creating thin scars in the atria in order to interrupt the arrhythmia. The idea is that by creating these scars (using radio waves) the electrical conduction of the arrhythmias is made impossible. There are different ways of performing RFA but all of them require inserting a wire (catheter) in the right and left atria.  The catheters are usually inserted through the femoral vein and femoral artery (other approaches can be used). The doctor first records a map of the electrical activation of the atria to select the best zone to apply the RF energy. Than he/she deliver a series of electrical impulses and re-checks the electrical activation map to assess the effects of the RFA treatment.  At the end of the procedure the doctor tries to induce AFib to demonstrate that the arrhythmia is no longer inducible. In some instances the ablation is not complete and the arrhythmias can recur even if the initial result of RFA is satisfactory.'},  
          // [D] Treatment efficacy
          // {targetPage: "EducationDetailPage", title: 'Treatment efficacy', disabled: 0, scenarios: [1, 2, 3], content: 'The most important concept to consider is that the efficacy of the treatment depends on the cardiac co-morbidities. For example, treatment is more effective for AFib occurring in the structurally normal heart than for one occurring in patients with valvular heart disease and with enlarged atria diameter. Therefore treating the cause of AFib is at least as important as treating the arrhythmia.  Neither drugs nor ablation are completely effective and the possibility of recurrent AFib is between 40% and 50%. Ablation technique has made remarkable advancements in the last few years. However for several patients rate control strategy is the only feasible option. In such instances the correct use of drugs to optimize the cardiac rate (at rest and during exercise) and the administration of anticoagulants is extremely important to improve the patient’s  quality of life.'},                                   
        ]
      },
      
     { 
      title: 'Facts on Anticoagulation',
      items: dataService.getTherapyType() == 1 ?  [
          // [D] Importance of anticoagulation
          // {targetPage: "EducationDetailPage", title: 'Importance of anticoagulation', scenarios: [1, 2], content: 'AFib is a cause of cardiovascular complications (for example, it can aggravate heart failure), and it causes a reduction in tolerance to physical activity. However, the most severe complication is caused by stagnation of blood in the atrial chambers (due to the loss of coordinated contraction). This promotes the formation of blood clots (thrombi) on the walls of the atrium. If the blood clot detaches it is often dragged by the blood flow to the arteries of the brain (due to anatomical reasons) so they can become clogged causing a stroke. For this reason, patients with AFib are commonly treated with anticoagulant drugs.'},
          // [A] Anticoagulation
          {targetPage: "EducationDetailPage", title: 'Anticoagulation', scenarios: [1, 2], content: 'In order to decrease chances of formation of the blood clots physician prescribes so called an anticoagulant. "Anti" means against and "coagulate" means to thicken into a gel or solid. Therefore, anticoagulants are often also called blood thinners. There are two common types of anticoagulants: vitamin K antagonists such as warfarin (coumadin) and direct acting oral anticoagulants (DOACs) such as apixaban, dabigatran, edoxaban, or rivaroxaban. DOACs are similar to warfarin in most clinical outcomes. They were shown to have reduced risk of causing an intracranial hemorrhage compared with warfarin.  However, the main advantage of taking the DOACs is that there is no requirement for routine monitoring of their anticoagulation effects.'},
          // [D] DOACs and warfarin
          // {targetPage: "EducationDetailPage", title: 'Direct acting oral anticoagulants (DOACs) and  warfarin', scenarios: [1, 2], content: 'The <i>direct acting oral anticoagulants</i> (DOACs) are used in anticoagulation therapy and include Dabigatran (Pradaxa), Rivaroxaban (Xarelto), and Apixaban (Eliquis). They are  sometimes also called <i>novel oral anticoagulants</i> (NOACs). DOACs are similar to warfarin in most clinical outcomes. They were shown to have reduced risk of causing an intracranial hemorrhage compared with warfarin.  However, the main advantage of taking the DOACs is that there is no current requirement for routine monitoring of their anticoagulation effects.'},
          // [A] Facts on warfarin
          {targetPage: "EducationDetailPage", title: 'Why I am prescribed warfarin?', scenarios: [1, 2], content: '<p>Daily dosage of warfarin may vary and it is managed by your doctor, a pharmacist, nurse practitioner or a local anticoagulation clinic. A blood test called an INR is required to ensure warfarin is working safely and effectively.</p><p><b>Will I experience side effects?</b></p><p>Anticoagulation medication does not have side effects but it may increase a bleeding risk so a doctor prior to starting a treatment assesses this risk. Patients at increased risk for bleeding, typically, are also those who will benefit the most from anticoagulation to prevent stroke, and your doctor considers a number of factors to lower bleeding risk.</p><p><b>How I should take warfarin?</b></p><p>Warfarin should be taken exactly as prescribed and dosage may vary from week to week. It should be taken around the same time every day. It may be taken with food or on an empty stomach and may be taken with other medications.</p>'},
          // [A] What to remember
          {targetPage: "EducationDetailPage", title: 'What to remember', scenarios: [1, 2], content: 'The <b>DIME</b> rule<ul><li>D - Diet changes - green vegetables can affect your INR - but don’t stop eating them. Just try to eat the same amount every week.</li><li>Alcohol - one or two alcoholic drinks a day is OK.</li><li>I - Illness - if you get sick with a cold, flu, nausea, vomiting or diarrhea, or any other illness, it may affect your INR.</li><li>M - Medications - any change in medications, including dose changes may affect your INR. This includes prescription medicines, over-the counter medicines, vitamins, and herbal products. Any product containing aspirin and over the counter pain relievers may be harmful when taking warfarin, as it can increase the risk of bleeding.</li><li>E - Error (missed dose) - If you miss a dose, take the missed dose as soon as you remember.Do not take a double dose the next day.</li></ul>'},                  
        ] : [
          {targetPage: "EducationDetailPage", title: 'Anticoagulation', scenarios: [1, 2], content: 'In order to decrease chances of formation of the blood clots physician prescribes so called an anticoagulant. "Anti" means against and "coagulate" means to thicken into a gel or solid. Therefore, anticoagulants are often also called blood thinners. There are two common types of anticoagulants: vitamin K antagonists such as warfarin (coumadin) and direct acting oral anticoagulants (DOACs) such as apixaban, dabigatran, edoxaban, or rivaroxaban. DOACs are similar to warfarin in most clinical outcomes. They were shown to have reduced risk of causing an intracranial hemorrhage compared with warfarin.  However, the main advantage of taking the DOACs is that there is no requirement for routine monitoring of their anticoagulation effects.'},
          {targetPage: "EducationDetailPage", title: 'Why I am prescribed DOACs?', scenarios: [1, 2], content: '<p>DOAC is new class of anticoagulants that includes dabigatran, rivaroxaban, apixaban, and edoxaban. It is very important that DOACs are taken exactly as prescribed by your doctor because their antithrombotic effect decreases rapidly 12 to 24 hours after the last dose. It is good if you need to prepare for surgical procedures, but causes a problem if medication is taken irregularly because a risk of stroke or heart attack is then increased. However, if a dose of DOACs is missed, then the next dose should not be doubled.</p><p><b>Will I experience side effects?</b></p><p>Anticoagulation medication does not have side effects but it may increase a bleeding risk so a doctor prior to starting a treatment assesses this risk. Patients at increased risk for bleeding, typically, are also those who will benefit the most from anticoagulation to prevent stroke, and your doctor considers a number of factors to lower bleeding risk.</p><p><b>What if I take other medications?</b></p><p>Patients on DOACs should avoid taking herbal medicines for depression and menopausal symptoms. Moreover, long use of nonsteroidal anti-inflammatory drugs, such as aspirin or ibuprofen, should be avoided.</p>'},
          {targetPage: "EducationDetailPage", title: 'DOACs and other medications', scenarios: [1, 2], content: '<p>It is possible to take DOACs with low-dose ("baby") aspirin, however such combination increases risk of bleeding.</p><p>Patients who are on the antiplatelet therapy (to reduce risk of stroke or heart disease) and take medications such as clopidogrel, prasugrel, or ticagrelor should consult their doctor as soon as possible because combined DOAC and antiplatelet therapy is usually not recommended.</p>'},
          {targetPage: "EducationDetailPage", title: 'Chronic kidney disease', scenarios: [1, 2], content: 'Dosage of the DOACs has to be changed for patients with impaired renal function dabigatran and rivaroxaban are not recommended for patients with severe reduction of their renal function while a lower dosage of apixaban is possible. Physician needs to be consulted for a revised dosage for patients with mild to moderate renal impairment.'},
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
