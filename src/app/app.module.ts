import { ProsDetailPage } from './../pages/pros-detail/pros-detail';
import { ProsPage } from './../pages/pros/pros';
import { VideoPage } from './../pages/video/video';
import { InterviewDetailPage } from './../pages/interview-detail/interview-detail';
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

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

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
    ProsDetailPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
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
    ProsDetailPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {} 
