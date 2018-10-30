import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Regsen2Page } from '../regsen2/regsen2';
import { BarcodeScanner, BarcodeScannerOptions } from '@ionic-native/barcode-scanner';

/**
 * Generated class for the RegsenPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-regsen',
  templateUrl: 'regsen.html',
})
export class RegsenPage {

  sensor={};
  option:BarcodeScannerOptions;
  constructor(public navCtrl: NavController, public navParams: NavParams, public barcodeScaner: BarcodeScanner) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegsenPage');
  }
  scan(){
    this.option={
      prompt: "Focus the sensors QR codein the window below to Register Sensor"
    }
    this.barcodeScaner.scan(this.option).then(barcodeData => {
      console.log(barcodeData);
      this.sensor = barcodeData;
      this.navCtrl.push(Regsen2Page, { data: barcodeData.text });

     }).catch(err => {
         console.log('Error', err);
     });
  } 

  sensor2(){
    this.navCtrl.push(Regsen2Page);
  }
}
