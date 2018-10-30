import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DashboardPage } from '../dashboard/dashboard';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/**
 * Generated class for the EstatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-estate',
  templateUrl: 'estate.html',
})
export class EstatePage {

  information: any[];

  constructor(public navCtrl: NavController, public navParams: NavParams, private http: Http) {
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
    console.log('ionViewDidLoad EstatePage');
  }
  desbd(){
    this.navCtrl.push(DashboardPage);
  }
}
