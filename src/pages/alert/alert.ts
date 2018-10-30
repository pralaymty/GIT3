import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
// import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
import { DashboardPage } from '../dashboard/dashboard';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/**
 * Generated class for the AlertPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-alert',
  templateUrl: 'alert.html',
})
export class AlertPage {

  information: any[];

  constructor(public navCtrl: NavController, public navParams: NavParams, private http: Http) { 
    let localData = http.get('assets/location.json').map(res => res.json().locations);
    localData.subscribe(data => {
      this.information = data;
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AlertPage');
  }
  
  ionViewWillEnter() {
  }

  home(){
    this.navCtrl.push(DashboardPage);
  }
}
