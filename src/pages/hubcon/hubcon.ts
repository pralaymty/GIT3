import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HublocPage } from '../hubloc/hubloc';
import { DevicePage } from '../device/device';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/**
 * Generated class for the HubconPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-hubcon',
  templateUrl: 'hubcon.html',
})
export class HubconPage {
  text={};
  loc: any[];
  constructor(public navCtrl: NavController, public navParams: NavParams, private http: Http) {
    this.text = navParams.get('data'); //bar code data //
    let localData = http.get('assets/locationbak.json').map(res => res.json().locations);
    localData.subscribe(data => {
      this.loc = data; // json file data
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HubconPage');
  }
  hubloc(){
    this.navCtrl.push(HublocPage);
  }
  device(){
    this.navCtrl.push(DevicePage);
  }
}
