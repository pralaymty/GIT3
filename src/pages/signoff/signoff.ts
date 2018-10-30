import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Signoff2Page } from '../signoff2/signoff2';

import { BarcodeScanner, BarcodeScannerOptions } from '@ionic-native/barcode-scanner';
// import { Toast } from '@ionic-native/toast';
// import { DataServiceProvider } from '../../providers/data-service/data-service';
// import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner';



@IonicPage()
@Component({
  selector: 'page-signoff',
  templateUrl: 'signoff.html',
})
export class SignoffPage {

  data={};
  option:BarcodeScannerOptions;
  constructor(public navCtrl: NavController, public navParams: NavParams, public barcodeScaner: BarcodeScanner) {
   
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad SignoffPage');
  }
  
  scan2(){
    this.option={
      prompt: "Focus the sensors QR codein the window below to sign off clearing"
    }
    this.barcodeScaner.scan(this.option).then(barcodeData => {
      console.log(barcodeData);
      this.data = barcodeData;
      this.navCtrl.push(Signoff2Page, { data: barcodeData.text });
     })
     
     .catch(err => {
         console.log('Error', err);
     });
  } 


  signoff2(){
    this.navCtrl.push(Signoff2Page);
  }

  scan() {

    // this.selectedProduct = {};
    // this.barcodeScanner.scan().then((barcodeData) => {
    //   this.selectedProduct = this.products.find(product => product.plu === barcodeData.text);
    //   if(this.selectedProduct !== undefined) {
    //     this.productFound = true;
    //   } else {
    //     this.productFound = false;
    //     this.toast.show(`Product not found`, '5000', 'center').subscribe(
    //       toast => {
    //         console.log(toast);
    //       }
    //     );
    //   }
    // }, (err) => {
    //   this.toast.show(err, '5000', 'center').subscribe(
    //     toast => {
    //       console.log(toast);
    //     }
    //   );
    // });
  }


}
