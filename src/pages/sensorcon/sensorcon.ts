import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SensorlocPage } from '../sensorloc/sensorloc';
import { DevicePage } from '../device/device';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/**
 * Generated class for the SensorconPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sensorcon',
  templateUrl: 'sensorcon.html',
})
export class SensorconPage {
  text={};
  loc: any[];
  constructor(public navCtrl: NavController, public navParams: NavParams, private http: Http) {
    this.text = navParams.get('data');
    let localData = http.get('assets/locationbak.json').map(res => res.json().locations);
    localData.subscribe(data => {
      this.loc = data; // json file data
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SensorconPage');
  }
  senloc(){
    this.navCtrl.push(SensorlocPage);
  }
  device(){
    this.navCtrl.push(DevicePage);
  }
}
