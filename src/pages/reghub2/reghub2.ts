import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Reghub3Page } from '../reghub3/reghub3';
import { Keyboard } from '@ionic-native/keyboard';

/**
 * Generated class for the Reghub2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-reghub2',
  templateUrl: 'reghub2.html',
})
export class Reghub2Page {
  public des:string;
  constructor(public navCtrl: NavController, public navParams: NavParams, private keyboard: Keyboard) {
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad Reghub2Page');
  }
  reghub3(){
    // des = des || 'No Description Entered';
    this.navCtrl.push(Reghub3Page, {text:this.des});
  }

  onDeviceReady(){
    this.keyboard.show();
  }
}
