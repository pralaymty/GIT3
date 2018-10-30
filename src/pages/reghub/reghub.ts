import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Reghub2Page } from '../reghub2/reghub2';
import { BarcodeScanner, BarcodeScannerOptions } from '@ionic-native/barcode-scanner';

/**
 * Generated class for the ReghubPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-reghub',
  templateUrl: 'reghub.html',
})
export class ReghubPage {

  data={};
  option:BarcodeScannerOptions;
  constructor(public navCtrl: NavController, public navParams: NavParams, public barcodeScaner: BarcodeScanner) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReghubPage');
  }
  scan(){
    this.option={
      prompt: "Focus the Hub's QR code in the window below to register HUB"
    }
    this.barcodeScaner.scan(this.option).then(barcodeData => {
      console.log(barcodeData);
      this.data = barcodeData;
      this.navCtrl.push(Reghub2Page);
      
     }).catch(err => {
         console.log('Error', err);
     });
  } 





  reghub2(){
    this.navCtrl.push(Reghub2Page);
  }
}
