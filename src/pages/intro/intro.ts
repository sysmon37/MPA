import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from './../home/home';
import { InterviewPage } from './../interview/interview';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';


/**
 * Generated class for the SlidesPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-intro',
  templateUrl: 'intro.html',
})
export class IntroPage {
  
  videoUrl: SafeResourceUrl;

  constructor(private domSanitizer: DomSanitizer, public navCtrl: NavController, public navParams: NavParams) {
    this.videoUrl = this.domSanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/b4_EhFpyRFA')    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SlidesPage');
      
  }
    
    openHomePage() {
    this.navCtrl.pop();
  }
    
    openInterviewPage() {
    this.navCtrl.push(InterviewPage);
  }
    
}
