import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DashboardPage } from '../dashboard/dashboard';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/**
 * Generated class for the Regsen4Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-regsen4',
  templateUrl: 'regsen4.html',
})
export class Regsen4Page {
  qrtext ={};
  loc: any[];
  constructor(public navCtrl: NavController, public navParams: NavParams, private http: Http) {
  this.qrtext = navParams.get('data');

  let localData = http.get('assets/locationbak.json').map(res => res.json().locations);
  localData.subscribe(data => {
    this.loc = data;
  })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Regsen4Page');
  }
  dashbd(){
    this.navCtrl.push(DashboardPage);
  }
}
