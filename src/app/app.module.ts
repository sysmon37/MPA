import { HomePage } from './../pages/home/home';
import { ImprovementPage } from './../pages/improvement/improvement';
import { SelfReevaluationPage } from './../pages/self-reevaluation/self-reevaluation';
import { WeeklySummaryPage } from './../pages/weekly-summary/weekly-summary';
import { TreatmentNonCompliancePage } from './../pages/treatment-non-compliance/treatment-non-compliance';
import { DietNonCompliancePage } from './../pages/diet-non-compliance/diet-non-compliance';
import { IntroPage } from './../pages/intro/intro';
import { ProsDetailPage } from './../pages/pros-detail/pros-detail';
import { IonicStorageModule } from '@ionic/storage';
import { DocumentViewer } from '@ionic-native/document-viewer';
import { ProsPage } from './../pages/pros/pros';
import { VideoPage } from './../pages/video/video';
import { ManualPage } from './../pages/manual/manual';
import { InterviewDetailPage } from './../pages/interview-detail/interview-detail';
import { BarriersToEngagementPage } from './../pages/barriers-to-engagement/barriers-to-engagement';
import { InterviewPage } from './../pages/interview/interview';
import { ReportingPage } from './../pages/reporting/reporting';
import { BehaviorChangePage } from './../pages/behavior-change/behavior-change';
import { EducationPage } from './../pages/education/education';
import { EducationDetailPage } from './../pages/education-detail/education-detail';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { ReportingAdherencePage } from './../pages/reporting-adherence/reporting-adherence';
import { RiskyEventsPage } from './../pages/risky-events/risky-events';
import { SymptomsPage } from './../pages/symptoms/symptoms';
import { DailySummaryPage } from './../pages/daily-summary/daily-summary';
import { MyApp } from './app.component';
import { DataProvider } from '../providers/data/data';
import { IonicPageModule } from 'ionic-angular/module';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    EducationPage,
    EducationDetailPage,
    BehaviorChangePage,
    ReportingPage,
    InterviewPage,
    InterviewDetailPage,
    VideoPage,
    ProsPage,
    ProsDetailPage,
    ManualPage,
    IntroPage,
    ReportingAdherencePage,
    RiskyEventsPage,
    SymptomsPage,
    DailySummaryPage,
    WeeklySummaryPage,
    BarriersToEngagementPage,
    SelfReevaluationPage,
    DietNonCompliancePage,
    TreatmentNonCompliancePage,
    ImprovementPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    EducationPage,
    EducationDetailPage,
    BehaviorChangePage,
    ReportingPage,
    InterviewPage,
    InterviewDetailPage,
    VideoPage,
    ProsPage,
    ProsDetailPage,
    ManualPage,
    IntroPage,
    ReportingAdherencePage,
    RiskyEventsPage,
    SymptomsPage,
    DailySummaryPage,
    WeeklySummaryPage,
    BarriersToEngagementPage,
    SelfReevaluationPage,
    DietNonCompliancePage,
    TreatmentNonCompliancePage,
    ImprovementPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DataProvider
  ]
})
export class AppModule {} 
