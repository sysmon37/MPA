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
          {targetPage: "EducationDetailPage", title: 'Diet', disabled: 0, scenarios: [1, 2, 3], content: '<p>Some foods — even healthy ones — can make certain anticoagulants less effective. Healthy eating is critical for everyone. But those living with AFib  who have been prescribed warfarin  should be aware that it can become less effective when foods are consumed that are high in vitamin K. These dietary modifications are not an issue with the DOACs because they work by a different mechanism and do not generally have food interactions.<p><p>Eating high levels of foods high in vitamin K, such as avocado, spinach, kale, and broccoli, can counteract the medication’s effectiveness. However, your doctor may recommend that rather than eliminating these healthy foods from your diet, you eat consistent amounts of these foods each day and have your warfarin dosage adjusted to take that into consideration.</p><p>Although good nutrition usually doesn’t stop or reverse AFib, it can reverse or improve many heart-related conditions and the need for additional medication.  Problems like high blood pressure, vascular disease, and diabetes are all conditions that can improve with good nutrition.  In addition, these conditions can increase your risk for stroke which, when combined with any risks due to AFib, provides a strong incentive to remain in the very best heart-healthy condition possible. Food isn’t the only thing to be cautious of when taking warfarin for anticoagulation.  You’ll need to exercise caution with antibiotics, common pain relievers, cold and allergy medications, and over-the-counter diet aids if you\'re on warfarin. Vitamin supplements can also disrupt a carefully balanced dosage of medication. If you take these, be sure to discuss them with your doctor.'},
          {targetPage: "EducationDetailPage", title: 'Exercise', disabled: 1, scenarios: [1, 2, 3]}
        ]
      },
      { 
        title: 'Self-care',
        items: [
          {targetPage: "EducationDetailPage", title: 'Risky events', disabled: 1, scenarios: [1, 2, 3]},
          {targetPage: "EducationDetailPage", title: 'Stress', disabled: 0, scenarios: [1, 2, 3], content: '<p>For some people, stressful events can trigger an episode of atrial fibrillation. Although you cannot prevent stress from ever entering your life, you can control how you think about the stressful event and this can impact how it affects your health.</p><p>Be physically active. Regular low-impact, moderate exercise reduces both anxiety and depression.</p><p>Identify and use your support networks. Talk to friends and family.</p>'},
          {targetPage: "EducationDetailPage", title: 'Sports', disabled: 1, scenarios: [1, 2, 3]},
          {targetPage: "EducationDetailPage", title: 'Travel', disabled: 1, scenarios: [1, 2, 3]}          
        ]
      },
      { 
        title: 'Engagement',
        items: [
          {targetPage: "EducationDetailPage", title: 'Being engaged', disabled: 0, scenarios: [1, 2, 3], content: '<p>Being engaged in your healthcare means:</p><ul><li><b>Ownership</b> - you assume the lead role in your health and healthcare decisions, including management of AFib.</li><li><b>Informed decision-making</b> – you are able to educate yourself about your condition (seek information, ask questions and find answers) so that you can make informed choices about managing your AFib and possibly to adjust your treatment.</li><li><b>Commitment</b> – being continuously involved and consistently taking steps to manage your AFib.</li></ul><p>NEED TO ADD TEXT FOR <u>OWNERSHIP</u></p>As an <u>informed</u> patient, you would be be able to weigh in all these factors and decide for yourself, for example, what to do if you missed a dose, how eating spinach salad may increase your risk of blood clotting, and how often you can still eat this favorite salad of yours and not increase your risk too much. You would understand when you need to consider changing or modifying your treatment and talk to your doctor about it and what you should be watching or and noting as you manage your health.</p><p>As a <u>comitted</u> patient, you will be in charge of seeking information about the disease, its possible treatments and risks of deviations from them (i.e., non-adherence), monitoring when your health state changes and making informed choices. For example, you will understand how your risks of stroke and of intracranial bleeding will change if you take different possible medications, and how they will be affected by your deviations from taking medications as directed or from eating food or drinking certain drinks that may counterbalance these medications. You will understand what disabilities may result from these risks, what restrictions are placed when you take different medications, and how these will affect your length and quality of life.</p><p>As an <u>engaged</u> patient, you will be spending 3 minutes a day before going to bed reflecting on whether you have been taking your medications as directed, have posed risks to bleeding that day, and how many AF episodes you’ve experienced that day. Then, once a week, you should summarize to yourself if you’ve observed some change in your health or your risky behavior, and if so, act upon it.</p>'},
          {id: Material.Interview, targetPage: "InterviewPage", title: 'Interview with an AFib patient', disabled: 0, scenarios: [2, 3]},
          {id: Material.Barriers, targetPage: "EducationDetailPage", title: 'Barriers to engagement', disabled: 0, scenarios: [2, 3], content: '<ul><li>Lack of positive reinforcement</li><li>Inadequate support from family or friends</li><li>Inadequate support from family or friends</li><li>Lack of daily routine</li><li>Inadequate communication with healthcare provider(s)</li><li>Insufficient understanding of treatment and required lifestyle changes</li><li>Lack of willpower</li><li>Time commitment required for engaging and for using the app</li></ul>'},
          // {targetPage: "EducationDetailPage", title: 'Maintaining engagement', disabled: 0, scenarios: [3], content: '<p>Here we should include some materials about how to maintain engagement and how important it is.</p>'}          
        ]
      },     
      { 
        title: 'Facts on AFib',
        items: [
          {targetPage: "EducationDetailPage", title: 'What is AFib?', disabled: 0, scenarios: [1, 2, 3], image: './assets/afib.png', content: 'AFib is an alteration of the heart rhythm in which the heart area that normally controls the electrical activation (the <i>sinus node</i>) is <i>overwhelmed</i> by the activity of other parts of the right atrium or left atrium (the atria are the upper chambers of the four chambers that make up the heart). As a result the electrical activity of the atria becomes completely chaotic and the heartbeat (pulse) becomes irregular.'},
          {targetPage: "EducationDetailPage", title: 'What are the symptoms?', disabled: 0, scenarios: [1, 2, 3], content: 'The main symptoms experienced by people suffering from AFib are palpitations, or the feeling of an irregular, accelerated heartbeat. Other symptoms include shortness of breath (at rest or during exercise), dizziness, syncope (i.e., loss of consciousness for a few seconds with spontaneous recovery), fatigue, and tiredness. Angina pectoris (chest pains) can also occur.'},
          {targetPage: "EducationDetailPage", title: 'What are the consequences of AFib?', disabled: 0, scenarios: [1, 2, 3], content: 'Apart from a few exceptional cases, AFib is an arrhythmia that does not pose a risk to life. However, its complications can be very serious. Indeed, importantly, since AFib often occurs in association with other heart (cardiac) or extra-cardiac diseases (for example, valvular defects, heart chamber enlargement, coronary artery disease, diabetes, hypertension). Thus, the clinical evolution depends also on the so-called <i>co-morbidities</i> (i.e., the <i>other</i> heart diseases). AFib is a cause of cardiovascular complications (for example, it can aggravate heart failure), and it causes a reduction in tolerance to physical activity. However, the most severe complication is caused by stagnation of blood in the atrial chambers (due to the loss of coordinated contraction). This promotes the formation of blood clots (thrombi) on the walls of the atrium. If the blood clot detaches it is often dragged by the blood flow to the arteries of the brain (due to anatomical reasons) so they can become clogged causing a stroke. For this reason, patients with AFib are commonly treated with anticoagulant drugs.'},
          {targetPage: "EducationDetailPage", title: 'How frequent is AFib?', disabled: 0, scenarios: [1, 2, 3], content: 'AFib is the most common cardiac arrhythmia (about 0.5% in the general adult population). The risk of disease increases with age - prevalence of AFib in  patients over 65 year old rises to 5% or more. Rarely AFib occurs in patients in whom the heart is structurally intact (that is, they have no other demonstrable heart disease). These cases represent approximately 10-15% of all AFib patients and can be caused by genetic defects (mutations) and may present familial distribution (that is, this condition “runs in the family”). In most cases however the arrhythmia occurs in patients who have other cardiovascular diseases such as hypertension, coronary artery disease and diseases affecting the valves of the heart (valvular disease). For example, 30%-80% of patients who are operated on for mitral valve disease have AFib. AFib also commonly occurs after all types of cardiac surgery. In these cases, if the diameter of the atria is normal, the arrhythmia almost always disappears after few days.'},
          {targetPage: "EducationDetailPage", title: 'Are there different types of AFib?', disabled: 0, scenarios: [1, 2, 3], content: 'After a first episode of AFib it is very important to distinguish whether the arrhythmia was spontaneous (normal heart) or induced by other causes. A careful analysis of symptoms can be of help. Of note, not all episodes of AFib are felt/noticed by patients. This can make diagnosis difficult. In patients in whom there were at least two episodes of AFib with spontaneous return to sinus rhythm within seven days, AFib is called <i>paroxysmal</i> (sometimes referred to as <i>recurrent</i>). If the episodes last more than 7 days and/or a medical intervention is necessary to restore the normal heart rhythm, AFib is classified as <i>persistent</i>. In cases where medical interventions are ineffective and AFib persists more than 7 days arrhythmia is defined as <i>permanent</i>. Of note these categories are not mutually exclusive since a patient may experience transitions from one category to another.'},
          {targetPage: "EducationDetailPage", title: 'What are the treatment strategies?', disabled: 0, scenarios: [1, 2, 3], content: 'There are two main treatment strategies: cardioversion, which is the attempt to restore the normal <i>sinus</i> rhythm (<i>rhythm control strategy</i>) or control of heart rate (<i>rate control strategy</i>). The rhythm control strategy, if effective, allows minimizing the symptoms and risks described above. It also enables discontinuation of the administration of anticoagulant drugs. The maintenance of sinus rhythm, however, is often difficult or impossible, especially when ultrasound shows an increase in the diameter of the atria. The possibilities of treatment are focused on the use of antiarrhythmic drugs (pills) or radiofrequency ablation.'},               
          {targetPage: "EducationDetailPage", title: 'What is radio-frequency ablation?', disabled: 0, scenarios: [1, 2, 3], content: 'Radio-frequency ablation (RFA) is an invasive procedure aimed at creating thin scars in the atria in order to interrupt the arrhythmia. The idea is that by creating these scars (using radio waves) the electrical conduction of the arrhythmias is made impossible. There are different ways of performing RFA but all of them require inserting a wire (catheter) in the right and left atria.  The catheters are usually inserted through the femoral vein and femoral artery (other approaches can be used). The doctor first records a map of the electrical activation of the atria to select the best zone to apply the RF energy. Than he/she deliver a series of electrical impulses and re-checks the electrical activation map to assess the effects of the RFA treatment.  At the end of the procedure the doctor tries to induce AFib to demonstrate that the arrhythmia is no longer inducible. In some instances the ablation is not complete and the arrhythmias can recur even if the initial result of RFA is satisfactory.'},  
          {targetPage: "EducationDetailPage", title: 'Which is the most effective treatment?', disabled: 0, scenarios: [1, 2, 3], content: 'The most important concept to consider is that the efficacy of the treatment depends on the cardiac co-morbidities. For example, treatment is more effective for AFib occurring in the structurally normal heart than for one occurring in patients with valvular heart disease and with enlarged atria diameter. Therefore treating the cause of AFib is at least as important as treating the arrhythmia.  Neither drugs nor ablation are completely effective and the possibility of recurrent AFib is between 40% and 50%. Ablation technique has made remarkable advancements in the last few years. However for several patients rate control strategy is the only feasible option. In such instances the correct use of drugs to optimize the cardiac rate (at rest and during exercise) and the administration of anticoagulants is extremely important to improve the patient’s  quality of life.'},                                      
        ]
      },
      // { 
      //   title: 'About this App',
      //   items: [
      //     {targetPage: "EducationDetailPage", title: 'Why is anticoagulation important?', disabled: 0, scenarios: [1, 2, 3], content: 'AFib is a cause of cardiovascular complications (for example, it can aggravate heart failure), and it causes a reduction in tolerance to physical activity. However, the most severe complication is caused by stagnation of blood in the atrial chambers (due to the loss of coordinated contraction). This promotes the formation of blood clots (thrombi) on the walls of the atrium. If the blood clot detaches it is often dragged by the blood flow to the arteries of the brain (due to anatomical reasons) so they can become clogged causing a stroke. For this reason, patients with AFib are commonly treated with anticoagulant drugs.'},
      //     {targetPage: "EducationDetailPage", title: 'OTHER FACTS ABOUT ANTICOAG (NEED TEXT HERE)', disabled: 1, scenarios: [1, 2, 3]},
      //   ]
      // }
     { 
      title: 'Facts on anticoagulation',
      items: [
        {targetPage: "EducationDetailPage", title: 'Why is anticoagulation important?', disabled: 0, scenarios: [1, 2, 3], content: 'AFib is a cause of cardiovascular complications (for example, it can aggravate heart failure), and it causes a reduction in tolerance to physical activity. However, the most severe complication is caused by stagnation of blood in the atrial chambers (due to the loss of coordinated contraction). This promotes the formation of blood clots (thrombi) on the walls of the atrium. If the blood clot detaches it is often dragged by the blood flow to the arteries of the brain (due to anatomical reasons) so they can become clogged causing a stroke. For this reason, patients with AFib are commonly treated with anticoagulant drugs.'},
        {targetPage: "EducationDetailPage", title: 'OTHER FACTS ABOUT ANTICOAG (NEED TEXT HERE)', disabled: 1, scenarios: [1, 2, 3]},
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
}
