import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SensorconPage } from '../sensorcon/sensorcon';
import { SensordtlPage } from '../sensordtl/sensordtl';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/**
 * Generated class for the SensorlocPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sensorloc',
  templateUrl: 'sensorloc.html',
})
export class SensorlocPage {
  information: any[];
  text={};
  constructor(public navCtrl: NavController, public navParams: NavParams, private http: Http) {
    this.text = navParams.get('data'); //bar code data //
    let localData = http.get('assets/information.json').map(res => res.json().items);
    localData.subscribe(data => {
      this.information = data;
    })
  }
 
  toggleSection(i) {
    this.information[i].open = !this.information[i].open;
  }
 
  toggleItem(i, j) {
    this.information[i].children[j].open = !this.information[i].children[j].open;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SensorlocPage');
  }
  sencof(){
    this.navCtrl.push(SensorconPage, {data: this.text});
  }
  sendtl(){
    this.navCtrl.push(SensordtlPage);
  }
}
