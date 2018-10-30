import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HublocPage } from '../hubloc/hubloc';
import { DashboardPage } from '../dashboard/dashboard';
import { DevicePage } from '../device/device';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/**
 * Generated class for the HubdtlPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-hubdtl',
  templateUrl: 'hubdtl.html',
})
export class HubdtlPage {
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
    console.log('ionViewDidLoad HubdtlPage');
  }
  dashbd(){
    this.navCtrl.push(DashboardPage);
  }
  device(){
    this.navCtrl.push(DevicePage);
  }
  hubloc(){
    this.navCtrl.push(HublocPage, {data: this.text});
  }

}
