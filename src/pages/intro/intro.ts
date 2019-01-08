import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { SignupPage } from '../signup/signup';
import { InAppBrowser } from '@ionic-native/in-app-browser';

/**
 * Generated class for the IntroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-intro',
  templateUrl: 'intro.html',
})
export class IntroPage {
	
	loginPage = LoginPage;
	signupPage = SignupPage;

  constructor(public navCtrl: NavController, public navParams: NavParams, private iab: InAppBrowser) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad IntroPage');
  }

  openBrowser(){
    console.log('asd')
    const browser = this.iab.create('http://cyberenumerator.com/login','_self',{location:'no', zoom:'no'}); 
   browser.show();
  }

}
