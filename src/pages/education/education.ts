import { VideoPage } from './../video/video';
import { InterviewPage } from './../interview/interview';
import { EducationDetailPage } from './../education-detail/education-detail';
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
  groupedItems = [];
  static readonly ID_INTERVIEW = 1;
  static readonly ID_OTHER = 2;
  static readonly ID_FAQ = 3;
  static readonly ID_EDUCATION = 4;
  static readonly ID_VIDEO = 5;
  static readonly ID_MANUAL = 6;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.groupedItems = [
      { 
        title: 'Lifestyle',
        items: [
          {id: EducationPage.ID_EDUCATION, title: 'Diet', disabled: 0, scenarios: [1, 2, 3], alternatveTitle: 'Diet', content: '<p>Some foods — even healthy ones — can make certain anticoagulants less effective. Healthy eating is critical for everyone. But those living with AFib  who have been prescribed warfarin  should be aware that it can become less effective when foods are consumed that are high in vitamin K. These dietary modifications are not an issue with the DOACs because they work by a different mechanism and do not generally have food interactions.<p><p>Eating high levels of foods high in vitamin K, such as avocado, spinach, kale, and broccoli, can counteract the medication’s effectiveness. However, your doctor may recommend that rather than eliminating these healthy foods from your diet, you eat consistent amounts of these foods each day and have your warfarin dosage adjusted to take that into consideration.</p><p>Although good nutrition usually doesn’t stop or reverse AFib, it can reverse or improve many heart-related conditions and the need for additional medication.  Problems like high blood pressure, vascular disease, and diabetes are all conditions that can improve with good nutrition.  In addition, these conditions can increase your risk for stroke which, when combined with any risks due to AFib, provides a strong incentive to remain in the very best heart-healthy condition possible. Food isn’t the only thing to be cautious of when taking warfarin for anticoagulation.  You’ll need to exercise caution  antibiotics, common pain relievers, cold and allergy medications, and over-the-counter diet aids if you\'re on warfarin. Vitamin supplements can also disrupt a carefully balanced dosage of medication. If you take these, be sure to discuss them with your doctor.'},
          {id: EducationPage.ID_OTHER, title: 'Exercise', disabled: 1, scenarios: [1, 2, 3]}
        ]
      },
      { 
        title: 'Self-care',
        items: [
          {id: EducationPage.ID_OTHER, title: 'Risky events', disabled: 1, scenarios: [1, 2, 3]},
          {id: EducationPage.ID_EDUCATION, title: 'Stress', disabled: 0, scenarios: [1, 2, 3], content: '<p>For some people, stressful events can trigger an episode of atrial fibrillation. Although  cannot prevent stress from ever entering your life, you can control how you think about the stressful event and this can impact how it affects your health.</p><p>Be physically active. Regular low-impact, moderate exercise reduces both anxiety and depression.</p><p>Identify and use your support networks. Talk to friends and family.</p>'},
          {id: EducationPage.ID_OTHER, title: 'Sports', disabled: 1, scenarios: [1, 2, 3]},
          {id: EducationPage.ID_OTHER, title: 'Travel', disabled: 1, scenarios: [1, 2, 3]}          
        ]
      },
      { 
        title: 'Engagement',
        items: [
          {id: EducationPage.ID_EDUCATION, title: 'Being engaged', alternativeTitle: 'Being Engaged', disabled: 0, scenarios: [1, 2, 3], content: '<p>We are hoping that the activities that follow will help you understand how you can become better at managing your atrial fibrillation (AFib). We call that being an engaged patient. What does it mean to be engaged? As an engaged patient, you will be in committed and in charge of seeking information about the disease, its possible management interventions, health risks from deviating from them and their consequences, monitoring when your health state changes and making informed choices. For example, you will understand how your risks of stroke and of intracranial bleeding will change if you take different possible medications, and how they will be affected by your deviations from taking medications as directed or from eating food or drinking certain drinks that may counterbalance the medications. You will understand what disabilities may result from these risks and what restriction are placed when you take different medications, and how these will affect your length and quality of life. When you will be informed, you would be able to weigh in all these factors and decide for yourself for example, what to do if you missed a dose by 1 hour, by 12 hours, by 18 hours? How eating spinach salad may increase your risk of blood clotting, and how often you could still eat this favorite salad of yours and not increase your risk too much. You would understand when you need to consider changing or modifying your treatment intervention and talk to your doctor about it and what you should be watching or and noting as you manage your health.</p><p>If you will be interested to be engaged, there are ways in which we could help you learn how to do this. You can decide to sign up for a course that our hospital is offering or we could be sending you information that would help you to learn more, to become more motivated and more engaged. You will be moving forward just reading and listening to our explanations and advice.</p></p>Practically, this means that you will be spending 3 minutes a day before going to bed reflecting on whether you have been taking your medications as directed, have posed risks to bleeding that day, and how many AF episodes you’ve experienced that day. Then, once a week, you should summarize to yourself if you’ve observed some change in your health or your risky behavior, and if so, act upon it. Because you will use the app to report symptoms and risky events in real time, the app will show you at your indicated bedtime, a link to the summary of your daily and weekly reports, so it would be easy for you to reflect.</p>'},
          {id: EducationPage.ID_INTERVIEW, title: 'Interview with an AFib patient', disabled: 0, scenarios: [1, 2, 3]},
          {id: EducationPage.ID_EDUCATION, title: 'Barriers to engagement', disabled: 0, scenarios: [2, 3], content: '<ul><li>Lack of positive reinforcement</li><li>Inadequate support from family or friends</li><li>Inadequate support from family or friends</li><li>Lack of daily routine</li><li>Inadequate communication with healthcare provider(s)</li><li>Insufficient understanding of treatment and required lifestyle changes</li><li>Lack of willpower</li><li>Time commitment required for engaging and for using the app</li></ul>'}          
        ]
      },     
      { 
        title: 'Facts on AFib',
        items: [
          {id: EducationPage.ID_EDUCATION, title: 'What is AFib?', disabled: 0, scenarios: [1, 2, 3], image: './assets/afib.png', content: 'Atrial fibrillation is an alteration of the heart rhythm in which the heart area that normally controls the electrical activation (the <i>sinus node</i>) is <i>overwhelmed</i> by the activity of other parts of the right atrium or left atrium (the atria are the upper chambers of the four chambers that make up the heart). As a result the electrical activity of the atria becomes completely chaotic and the heartbeat (pulse) becomes irregular.'},
          {id: EducationPage.ID_EDUCATION, title: 'What are the symptoms?', disabled: 0, scenarios: [1, 2, 3], content: 'The main symptoms experienced by people suffering from atrial fibrillation are palpitations, or the feeling of an irregular, accelerated heartbeat. Other symptoms include shortness of breath( at rest or during exercise), dizziness, syncope (i.e., loss of consciousness for a few seconds with spontaneous recovery), fatigue, and tiredness. Angina pectoris (chest pains) can also occur.'},
          {id: EducationPage.ID_EDUCATION, title: 'What are the consequences of AFib?', disabled: 0, scenarios: [1, 2, 3], content: 'Apart from a few exceptional cases, atrial fibrillation is an arrhythmia that does not pose a risk to life. However, its complications can be very serious. Indeed, importantly, since atrial fibrillation often occurs in association with other heart (cardiac) or extra-cardiac diseases (for example, valvular defects, heart chamber enlargement, coronary artery disease, diabetes, hypertension). Thus, the clinical evolution depends also on the so-called <i>co-morbidity morbidities</i> (i.e., the <i>other</i> heart diseases). Atrial fibrillation is a cause of cardiovascular complications (for example, it can aggravate heart failure), and it causes a reduction in tolerance to physical activity. However, the most severe complication is caused by stagnation of blood in the atrial chambers (due to the loss of coordinated contraction). This promotes the formation of blood clots (thrombi) on the walls of the atrium. If the blood clot detaches it is often dragged by the blood flow to the arteries of the brain (due to anatomical reasons) so they can become clogged causing a stroke. For this reason, patients with atrial fibrillation are commonly treated with anticoagulant drugs.'},
          {id: EducationPage.ID_EDUCATION, title: 'How frequent is AFib?', disabled: 0, scenarios: [1, 2, 3], content: 'Atrial fibrillation is the most common cardiac arrhythmia (about 0.5% in the general adult population). The risk of disease increases with age: in the over 65s, the percentage of people with AF rises to 5% or more. Rarely atrial fibrillation occurs in patients in whom the heart is structurally intact (that is, they have no other demonstrable heart disease). These cases represent approximately 10-15% of all atrial fibrillation patients and can be caused by genetic defects (mutations) and may present familial distribution (that is, this condition “runs in the family”). In most cases however the arrhythmia occurs in patients who have other cardiovascular diseases such as hypertension, coronary artery disease and diseases affecting the valves of the heart (valvular disease). For example, 30%-80% of patients who are operated on for mitral valve disease have atrial fibrillation. Atrial fibrillation also commonly occurs after all types of cardiac surgery. In these cases, if the diameter of the atria is normal, the arrhythmia almost always disappears after few days.'},
          {id: EducationPage.ID_EDUCATION, title: 'Are there different types of AFib?', disabled: 0, scenarios: [1, 2, 3], content: 'After a first episode of atrial fibrillation is very important to distinguish whether the arrhythmia was spontaneous (normal heart) or induced by other causes. A careful analysis of symptoms can be of help. Of note, not all episodes of atrial fibrillation are felt/noticed by patients. This can make diagnosis difficult. In patients in whom there were at least two episodes of atrial fibrillation with spontaneous return to sinus rhythm within seven days, atrial fibrillation is called <i>paroxysmal</i> (sometimes referred to as <i>recurrent</i>). If the episodes last more than 7 days and/or a medical intervention is necessary to restore the normal heart rhythm, atrial fibrillation is classified as <i>persistent</i>. In cases where medical interventions are ineffective and atrial fibrillation persists more than 7 days arrhythmia is defined as <i>permanent</i>. Of note these categories are not mutually exclusive since a patient may experience transitions from one category to another.'},
          {id: EducationPage.ID_EDUCATION, title: 'What are the treatment strategies?', disabled: 0, scenarios: [1, 2, 3], content: 'There are two main treatment strategies: cardioversion, which is the attempt restore the normal <i>sinus</i> rhythm (<i>rhythm control strategy</i>) or control of heart rate (<i>rate control strategy</i>). The rhythm control strategy, if effective, allows minimizing the symptoms and risks described above. It also enables discontinuation of the administration of anticoagulant drugs. The maintenance of sinus rhythm, however, is often difficult or impossible, especially when ultrasound shows an increase in the diameter of the atria. The possibilities of therapy are focused on the use of antiarrhythmic drugs (pills) or radiofrequency ablation.'},               
          {id: EducationPage.ID_EDUCATION, title: 'What is radio-frequency ablation?', disabled: 0, scenarios: [1, 2, 3], content: 'Radiofrequency ablation (RFA) is an invasive procedure aimed and creating thin scars in the atria in order to interrupt the arrhythmia. The idea is that by creating these scars (using radio waves) the electrical conduction of the arrhythmias is made impossible. There are different ways of performing RFA but all of them require inserting a wire (catheter) in the right and left atria.  The catheters are usually inserted through the femoral vein and femoral artery (other approaches can be used). The doctor first records a map of the electrical activation of the atria to select the best zone to apply the RF energy. Than he/she deliver a series of electrical impulses and re-checks the electrical activation map to assess the effects of the RFA treatment.  At the end of the procedure the doctor tries to induce atrial fibrillation to demonstrate that the arrhythmia is no longer inducible. In some instances the ablation is not complete and the arrhythmias can recur even if the initial result of RFA is satisfactory.'},  
          {id: EducationPage.ID_EDUCATION, title: 'Which is the most effective therapy?', disabled: 0, scenarios: [1, 2, 3], content: 'The most important concept to consider is that the efficacy of the therapy depends on the cardiac co-morbidities. For example therapy is more effective for atrial fibrillation occurring in the structurally normal heart than for one occurring in patients with valvular heart disease and with enlarged atria diameter. Therefore treating the cause of atrial fibrillation is at least as important as treating the arrhythmia.  Neither drugs nor ablation are completely effective and the possibility of recurrent atrial fibrillation is between 40% and 50%. Ablation technique has made remarkable advancements in the last few years. However for several patients rate control strategy is the only feasible option. In such instances the correct use of drugs to optimize the cardiac rate (at rest and during exercise) and the administration of anticoagulants is extremely important to improve the patient’s  quality of life.'},                                      
        ]
      },
      { 
        title: 'About this App',
        items: [
          {id: EducationPage.ID_VIDEO, title: 'Video tutorial', alternativeTitle: 'Video Tutorial', disabled: 0, scenarios: [1, 2, 3]},
          {id: EducationPage.ID_MANUAL, title: 'User manual', alternativeTitle: 'User Manual', disabled: 0, scenarios: [1, 2, 3]},
        ]
      }      
    ];

    for(let group of this.groupedItems) {
      for (let item of group.items) 
        if (item.alternativeTitle === undefined) item.alternativeTitle = group.title;      
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EducationPage');
  }

  openItemDetailPage(item) {
    switch (item.id) {
      case EducationPage.ID_INTERVIEW:
        this.navCtrl.push(InterviewPage); 
        break;
      case EducationPage.ID_EDUCATION:
        this.navCtrl.push(EducationDetailPage, {item: item, title: item.alternativeTitle});
        break;
      case EducationPage.ID_VIDEO:
        this.navCtrl.push(VideoPage);
        break;
      case EducationPage.ID_MANUAL:
        break;
      default: 
    }
  }

}
