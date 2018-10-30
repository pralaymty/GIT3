import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SensorconPage } from './sensorcon';

@NgModule({
  declarations: [
    SensorconPage,
  ],
  imports: [
    IonicPageModule.forChild(SensorconPage),
  ],
})
export class SensorconPageModule {}
