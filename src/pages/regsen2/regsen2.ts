import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Regsen3Page } from '../regsen3/regsen3';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { Regsen4Page } from '../regsen4/regsen4';

/**
 * Generated class for the Regsen2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-regsen2',
  templateUrl: 'regsen2.html',
})
export class Regsen2Page {
  qrtext ={};
  constructor(public navCtrl: NavController, public navParams: NavParams, private camera: Camera) {
    this.qrtext = navParams.get('data');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Regsen2Page');
  }
  estatelist(){

    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
    
    this.camera.getPicture(options).then((imageData) => {
     // imageData is either a base64 encoded string or a file URI
     // If it's base64 (DATA_URL):
     let base64Image = 'data:image/jpeg;base64,' + imageData;
     this.navCtrl.push(Regsen3Page, { data: this.qrtext });
    },
    
    (err) => {
     // Handle error
    });
  }
  regsensor(){
    this.navCtrl.push(Regsen3Page);
  }
}
