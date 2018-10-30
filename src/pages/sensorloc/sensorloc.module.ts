import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SensorlocPage } from './sensorloc';

@NgModule({
  declarations: [
    SensorlocPage,
  ],
  imports: [
    IonicPageModule.forChild(SensorlocPage),
  ],
})
export class SensorlocPageModule {}
