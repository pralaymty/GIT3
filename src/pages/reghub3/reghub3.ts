import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DashboardPage } from '../dashboard/dashboard';

/**
 * Generated class for the Reghub3Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-reghub3',
  templateUrl: 'reghub3.html',
})
export class Reghub3Page {

  public text: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.text = this.navParams.get('text');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Reghub3Page');
  }
  dashbd(){
    this.navCtrl.push(DashboardPage);
  }
}
