import { Component } from '@angular/core';
import { NavController, NavParams } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { ViewController } from '@ionic/core';

@Component({
  selector: 'page-splash',
  templateUrl: 'splash.page.html',
})
export class SplashPage {

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController,
    public splashScreen: SplashScreen,) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SplashPage');
  }
  
  ionViewDidEnter() {
 
    this.splashScreen.hide();

    setTimeout(() => {
    //  this.nativeAudio.play('intro').catch(() => { });
      this.viewCtrl._destroy;
    }, 4000);
  }
}
