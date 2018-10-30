import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SensordtlPage } from '../sensordtl/sensordtl';
import { HubdtlPage } from '../hubdtl/hubdtl';
import { BarcodeScanner, BarcodeScannerOptions } from '@ionic-native/barcode-scanner';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
/**
 * Generated class for the DevicePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-device',
  templateUrl: 'device.html',
})
export class DevicePage {
  text={};
  data={};
  option:BarcodeScannerOptions;
  loc: any[];
  public qrcode: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public barcodeScaner: BarcodeScanner, private http: Http) {

    let localData = http.get('assets/locationbak.json').map(res => res.json().locations);
    localData.subscribe(data => {
      this.loc = data; //JSON file Data
    })
  }
   
  scan2(){
    this.option={
      prompt: "Focus the sensors QR code in the window below."
    }
    this.barcodeScaner.scan(this.option).then(barcodeData => {
      console.log(barcodeData);
      this.text = barcodeData; // bar code data

     })

    //  if (this.data.text == this.loc.qrcode){

    //   let key = this.delete.value.name;
    //      this.store.delete(key);
    //    alert("Account created");
    //  }
     
     
     .catch(err => {
         console.log('Error', err);
     });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DevicePage');
  }
 
  dsensor(){
    this.navCtrl.push(SensordtlPage, { data: this.text });
  }
  dhub(){
    this.navCtrl.push(HubdtlPage, { data: this.text });
  }
}
