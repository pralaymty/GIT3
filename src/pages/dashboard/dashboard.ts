import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertPage } from '../alert/alert';
import { SignoffPage } from '../signoff/signoff';
import { ReghubPage } from '../reghub/reghub';
import { RegsenPage } from '../regsen/regsen';
import { DevicePage } from '../device/device';
import { EstatePage } from '../estate/estate';
import { HomePage } from '../home/home';

/**
 * Generated class for the DashboardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html',
})
export class DashboardPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DashboardPage');
  }
  alertpg(){
    this.navCtrl.push(AlertPage);
  }
  signoffpg(){
    this.navCtrl.push(SignoffPage);
  }
  reghubpg(){
    this.navCtrl.push(ReghubPage);
  }
  regsensorpg(){
    this.navCtrl.push(RegsenPage);
  }
  devicepg(){
    this.navCtrl.push(DevicePage);
  }
  estatepg(){
    this.navCtrl.push(EstatePage);
  }
  logout(){
    this.navCtrl.push(HomePage);
  }

}
