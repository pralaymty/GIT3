import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Regsen4Page } from '../regsen4/regsen4';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/**
 * Generated class for the Regsen3Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-regsen3',
  templateUrl: 'regsen3.html',
})
export class Regsen3Page {
  information: any[];
  qrtext ={};
  constructor(public navCtrl: NavController, public navParams: NavParams, private http: Http) {
    let localData = http.get('assets/information.json').map(res => res.json().items);
    localData.subscribe(data => {
      this.information = data;
    })
    this.qrtext = navParams.get('data');
  }
   
  toggleSection(i) {
    this.information[i].open = !this.information[i].open;
  }
 
  toggleItem(i, j) {
    this.information[i].children[j].open = !this.information[i].children[j].open;
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad Regsen3Page');
  }
  regsen4(){
    this.navCtrl.push(Regsen4Page, { data: this.qrtext } );
  }
}
