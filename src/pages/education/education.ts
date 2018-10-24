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
        title: 'Modes de vie',
        items: 
          this.dataService.getTherapyType() == 1 ? [
            {targetPage: "EducationDetailPage", title: 'Devrais-je surveiller mon régime alimentaire ?', disabled: 0, scenarios: [1, 2], content: '<p>SomeCertains aliments — même des aliments sains — peuvent rendre la warfarine moins efficace, surtout si votre régime est riche en vitamine K. La vitamine K se trouve dans les aliments suivants :<ul><li>•	Les légumes à feuilles vertes comme le chou frisé, les épinards, les feuilles de navet, les feuilles de « chou vert », la bette à cardes, les feuilles de moutarde, le persil, la laitue romaine et la laitue à feuilles vertes.</li><li>•	Les légumes comme les choux de Bruxelles, le brocoli, le chou-fleur et le chou.</li><li>•	Le poisson, le foie, la viande, les œufs et les céréales (en plus petite quantité).</li></ul></p><p>La consommation de grandes quantités de ces aliments peut neutraliser les effets de la warfarine. Toutefois, votre médecin peut vous recommander, au lieu de les éliminer de votre régime, d’en manger une quantité constante chaque jour et ajuster votre dose de warfarine en conséquence.</p>'},
            // {targetPage: "EducationDetailPage", title: 'Exercise', scenarios: [0, 1, 2]}
          ] : [
            {targetPage: "EducationDetailPage", title: 'Devrais-je surveiller mon régime alimentaire ?', disabled: 0, scenarios: [1, 2], content: '<p>L’incidence des AOD sur votre régime alimentaire est limitée. Vous devriez faire preuve de modération en buvant des boissons alcoolisées (un seul verre de vin au repas, par exemple). De plus, bien qu’il n’y ait pas de preuve scientifique directe, il serait bon d’éviter le jus de pamplemousse, car il peut nuire à l’AOD (en amoindrir l’effet). Enfin, si on vous a prescrit du dabigatran, vous devriez le prendre aux repas afin de réduire le risque d’avoir l’estomac dérangé.</p>'},
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
        title: 'Avantages de la mobilisation',
        items: [
          {targetPage: "EducationDetailPage", title: 'Ce qu’on entend par mobilisation', scenarios: [1, 2], content: '<p>La mobilisation dans la prise en charge de votre maladie entraîne :</p><ol><li><b>Une appropriation</b> - Vous jouerez le premier rôle dans vos décisions en matière de santé et de soins, y compris le traitement de la FA. Vous vous occuperez de la recherche d’informations sur la maladie, ses traitements possibles et les risques découlant de la dérogation (c’est-à-dire du non-respect du traitement), du suivi lorsque votre état de santé change et de la prise de décisions éclairées.</li><br/><li><b>Une prise de décisions éclairées</b> - Vous vous renseignerez sur votre état de santé afin de pouvoir faire des choix éclairés sur le traitement de votre FA. Vous saurez quand il faut considérer la possibilité de remplacer ou de modifier votre traitement et en parler à votre médecin. Vous saurez aussi ce que vous devez surveiller ou noter pendant que vous gérez votre santé.</li><br/><li><b>Un engagement</b> – Vous vous investirez continuellement et prendrez constamment des mesures pour gérer votre FA. Tous les soirs, vous passerez trois minutes avant de vous coucher à déterminer si vous avez pris vos médicaments en respectant la dose prescrite ou si vous avez éprouvé des symptômes de la FA. Ensuite, tous les sept jours, vous passerez sommairement en revue la semaine pour déterminer si vous avez remarqué un changement dans votre état de santé et, le cas échéant, agir en conséquence.</li></ol><p></p>'},
          {id: Material.Interview, targetPage: "InterviewPage", title: 'Interview with an AFib patient', scenarios: [2]},
          {id: Material.Barriers, targetPage: "EducationDetailPage", title: 'Barriers to engagement', scenarios: [2], content: '<ul><li>Lack of positive reinforcement</li><li>Inadequate support from family or friends</li><li>Inadequate support from family or friends</li><li>Lack of daily routine</li><li>Inadequate communication with healthcare provider(s)</li><li>Insufficient understanding of treatment and required lifestyle changes</li><li>Lack of willpower</li><li>Time commitment required for engaging and for using the app</li></ul>'},
        ]
      },     
      { 
        // Modifications based on comments from 2018-4-26
        title: 'Les faits sur la FA',
        items: [
          {targetPage: "EducationDetailPage", title: 'Est-ce que je comprends la FA ?', disabled: 0, scenarios: [1, 2, 3], content: '<p>La FA est un changement dans le rythme cardiaque au cours duquel la partie du cœur qui contrôle normalement l’activation électrique (le nœud sino-auriculaire) est dépassée par l’activité d’autres parties de l’oreillette gauche ou droite (les oreillettes sont les cavités supérieures, sur les quatre cavités qui composent le cœur). En conséquence, l’activité électrique de l’oreillette devient complètement désordonnée, et le rythme cardiaque (pouls) devient irrégulier.</p><p><b>Quels sont les symptômes de la FA ?</b></p><p>Le symptôme le plus courant est la palpitation ou la sensation d’un rythme cardiaque accéléré irrégulier. D’autres symptômes comprennent l’essoufflement (au repos ou pendant l’exercice), les étourdissements, la syncope (une perte de conscience pendant quelques secondes, suivie d’une récupération spontanée), l’épuisement et la fatigue. Aussi, le patient peut ressentir une douleur ou une pression dans la poitrine.</p><p><b>Notez que la douleur ou la pression dans la poitrine constitue une urgence médicale. Vous êtes peut-être en train de faire une crise cardiaque — demandez de l’aide médicale (composez le 911) immédiatement.</b></p>'},
          {targetPage: "EducationDetailPage", title: 'Est-ce que je risque un AVC ?', disabled: 0, scenarios: [1, 2, 3], content: '<p>La complication la plus grave de la FA est causée par la stagnation du sang dans les oreillettes. Elle favorise la formation de caillots sanguins dans le cœur. Si un caillot se détache, il est souvent entraîné par le flux sanguin vers les artères du cerveau ; c’est ainsi qu’il risque de les obstruer et de causer un AVC.</p><p>Le risque d’AVC dépend d’un certain nombre de facteurs et varie d’un patient à un autre, et votre médecin l’évaluera à l’aide d’un certain nombre d’outils de diagnostic. Pour réduire le risque d’AVC, on vous prescrit un anticoagulant.</p><p><b>Comment puis-je réduire le risque d’AVC ?</b></p><p>Afin de réduire les risques de formation de caillots sanguins, le médecin prescrit ce que l’on appelle un anticoagulant. « Anti » signifie « contre » et « coaguler » signifie « donner une consistance gélatineuse ou solide ». Par conséquent, on appelle aussi les anticoagulants « éclaircisseurs de sang ».</p><p>Il existe deux types courants d’anticoagulants : l’antivitamine K comme la warfarine (Coumadin) et les anticoagulants oraux à action directe (AOD) comme l’apixaban, le dabigatran, l’edoxaban et le rivaroxaban. Les AOD donnent à peu près les mêmes résultats cliniques que la warfarine. Il a été démontré qu’ils présentent un risque d’hémorragie intracrânienne moindre que la warfarine. Toutefois, le principal avantage des AOD est qu’ils ne nécessitent pas une surveillance régulière de leurs effets anticoagulants.</p>.'},
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
      title: 'Les faits sur l’anticoagulation',
      items: dataService.getTherapyType() == 1 ?  [
          {targetPage: "EducationDetailPage", title: 'Anticoagulation', scenarios: [1, 2], content: 'In order to decrease chances of formation of the blood clots physician prescribes so called an anticoagulant. "Anti" means against and "coagulate" means to thicken into a gel or solid. Therefore, anticoagulants are often also called blood thinners. There are two common types of anticoagulants: vitamin K antagonists such as warfarin (coumadin) and direct acting oral anticoagulants (DOACs) such as apixaban, dabigatran, edoxaban, or rivaroxaban. DOACs are similar to warfarin in most clinical outcomes. They were shown to have reduced risk of causing an intracranial hemorrhage compared with warfarin.  However, the main advantage of taking the DOACs is that there is no requirement for routine monitoring of their anticoagulation effects.'},
          {targetPage: "EducationDetailPage", title: 'Pourquoi me prescrit-on la warfarine ?', scenarios: [1, 2], content: '<p>La dose quotidienne de warfarine peut varier, et c’est votre médecin, un.e pharmacien.ne, un.e infirmi.er.ère praticien.ne ou une clinique d’anticoagulothérapie qui l’administre. Il faut une analyse sanguine appelée RIN pour s’assurer que la warfarine fonctionne de façon sécuritaire et efficace.</p><p><b>Vais-je ressentir des effets secondaires ?</b></p><p>Le médicament anticoagulant n’a pas d’effets secondaires, mais il peut augmenter le risque de saignement ; un médecin évalue donc ce risque avant de commencer un traitement. Les patients qui présentent un risque accru de saignement sont habituellement aussi ceux qui bénéficient le plus de l’anticoagulation pour prévenir l’AVC, et votre médecin tient compte d’un certain nombre de facteurs pour réduire le risque de saignement.</p><p><b>Comment devrais-je prendre la warfarine ?</b></p><p>Il faut prendre la warfarine exactement comme elle est prescrite, et la posologie peut varier d’une semaine à une autre. Il faut la prendre à peu près à la même heure, chaque jour. Vous pouvez la prendre en mangeant, à jeun et même avec d’autres médicaments.</p>'},
          {targetPage: "EducationDetailPage", title: 'What to remember', scenarios: [1, 2], content: 'The <b>DIME</b> rule<ul><li>D - Diet changes - green vegetables can affect your INR - but don’t stop eating them. Just try to eat the same amount every week.</li><li>Alcohol - one or two alcoholic drinks a day is OK.</li><li>I - Illness - if you get sick with a cold, flu, nausea, vomiting or diarrhea, or any other illness, it may affect your INR.</li><li>M - Medications - any change in medications, including dose changes may affect your INR. This includes prescription medicines, over-the counter medicines, vitamins, and herbal products. Any product containing aspirin and over the counter pain relievers may be harmful when taking warfarin, as it can increase the risk of bleeding.</li><li>E - Error (missed dose) - If you miss a dose, take the missed dose as soon as you remember.Do not take a double dose the next day.</li></ul>'},                  
        ] : [
          {targetPage: "EducationDetailPage", title: 'Anticoagulation', scenarios: [1, 2], content: 'In order to decrease chances of formation of the blood clots physician prescribes so called an anticoagulant. "Anti" means against and "coagulate" means to thicken into a gel or solid. Therefore, anticoagulants are often also called blood thinners. There are two common types of anticoagulants: vitamin K antagonists such as warfarin (coumadin) and direct acting oral anticoagulants (DOACs) such as apixaban, dabigatran, edoxaban, or rivaroxaban. DOACs are similar to warfarin in most clinical outcomes. They were shown to have reduced risk of causing an intracranial hemorrhage compared with warfarin.  However, the main advantage of taking the DOACs is that there is no requirement for routine monitoring of their anticoagulation effects.'},
          {targetPage: "EducationDetailPage", title: 'Pourquoi me prescrit-on un AOD ?', scenarios: [1, 2], content: '<p>L’AOD est une nouvelle catégorie d’anticoagulants qui comprend le dabigatran, le rivaroxaban, l’apixaban et l’edoxaban. Il est très important de prendre l’AOD exactement comme votre médecin l’a prescrit, car son effet antithrombotique diminue rapidement de 12 à 24 heures après la dernière dose. Il est utile si vous devez vous préparer à une opération chirurgicale, mais cause un problème si vous ne le prenez pas de façon régulière, car le risque d’AVC ou de crise cardiaque augmente. Toutefois, si vous oubliez une dose d’AOD, vous ne pouvez pas doubler la dose suivante.</p><p><b>Vais-je ressentir des effets secondaires ?</b></p><p>Le médicament anticoagulant n’a pas d’effets secondaires, mais il peut augmenter le risque de saignement ; un médecin évalue donc ce risque avant de commencer un traitement. Les patients qui présentent un risque accru de saignement sont habituellement aussi ceux qui bénéficient le plus de l’anticoagulation pour prévenir l’AVC, et votre médecin tient compte d’un certain nombre de facteurs pour réduire le risque de saignement.</p><p><b>Et si je prends d’autres médicaments ?</b></p><p>Les patients qui prennent un AOD doivent éviter de prendre des plantes médicinales contre la dépression ou les symptômes de la ménopause. De plus, il faut éviter d’utiliser de façon prolongée des médicaments anti-inflammatoires non stéroïdiens, comme l’aspirine ou l’ibuprofène.</p>'},
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
