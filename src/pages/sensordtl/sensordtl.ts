import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DashboardPage } from '../dashboard/dashboard';
import { DevicePage } from '../device/device';
import { SensorlocPage } from '../sensorloc/sensorloc';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/**
 * Generated class for the SensordtlPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sensordtl',
  templateUrl: 'sensordtl.html',
})
export class SensordtlPage {
  text={};
  loc: any[];
  constructor(public navCtrl: NavController, public navParams: NavParams, private http: Http) {
    this.text = navParams.get('data'); //bar code data //navParams.get('data')
    let localData = http.get('assets/locationbak.json').map(res => res.json().locations);
    localData.subscribe(data => {
      this.loc = data; // json file data
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SensordtlPage');
  }
  dashbd(){
    this.navCtrl.push(DashboardPage);
  }
  device(){
    this.navCtrl.push(DevicePage);
  }
  senloc(){
    this.navCtrl.push(SensorlocPage, {data: this.text});
  }
}
