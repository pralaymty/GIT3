import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HubconPage } from '../hubcon/hubcon';
import { HubdtlPage } from '../hubdtl/hubdtl';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/**
 * Generated class for the HublocPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-hubloc',
  templateUrl: 'hubloc.html',
})
export class HublocPage {
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
    console.log('ionViewDidLoad HublocPage');
  }
  hubcof(){
    this.navCtrl.push(HubconPage, {data: this.text});
  }
  hubdtl(){
    this.navCtrl.push(HubdtlPage);
  }
}
