import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';


/**
 * Generated class for the EducationDetailPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-education-detail',
  templateUrl: 'education-detail.html',
})
export class EducationDetailPage {

  title;
  itemTitle;
  itemContent;
  itemImage;
    isChecked: boolean;
    currentView;
    
  

  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage) {
  }
    

  ionViewDidLoad() {
    console.log('ionViewDidLoad EducationDetailPage');
    
    let item = this.navParams.get("item");
    this.title = this.navParams.get("title");
    this.itemTitle = item.title;
    this.itemContent = item.content;
    this.itemImage = item.image;
    console.log(item.title);
  //  this.currentContent(item.title);
      //console.log(this.isChecked);
    //   var currentView = item.title;
    //   console.log(currentView);
    //   this.showS(item.title);
    //   console.log(this.isChecked);
      
      
      
    //   this.storage.get(item.title).then((value) => {
    // console.log(value);
    //         var theView = value.toString();
    //         if(item.title == 'Diet' || 'Stress' || 'Being engaged'){
    //             this.isChecked = theView;
    //         }
    // });
      
  }
    
 //   currentContent(it){
        
 //       var currentView = it;
  //      console.log(currentView);
        
  //  }
    
    
   showS(it){
       var currentView = this.currentView;
       
        console.log(it);
       this.storage.set('view',it);
       
       console.log("this is test");
       console.log(currentView);
       console.log(this.isChecked);
     
   }
    
 
    
    
    updateStatus(){
        
        
        
      
        return this.storage.get('view').then((value) => {
    console.log(value);
            
            
            var theView = value.toString();
            
            if(this.isChecked == true){
                this.storage.set(theView, true);
            }else if(this.isChecked == false){
                this.storage.set(theView, false);
            }else if(this.isChecked == 'Not visited'){
                this.storage.set(theView, false);
            }
            
           
            
           
  });
        
        
       
        
   // console.log(currentView);
        
     //   console.log();
        
        
  //      console.log('new state:' + this.isChecked);
  //      var feedback = [{title:"Diet", status:"not visited"}];
 //       
   //     
  //      if (this.currentView == feedback[0].title){console.log("he")}
        
   //     console.log(this.isChecked);
   //    if (this.isChecked == true) {
    //       console.log(this.currentView);
     //          if (this.currentView == "Diet"){feedback[0].status = "checked"}
         
       
    }
    
    
 
                                      }