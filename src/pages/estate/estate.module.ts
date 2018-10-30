import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EstatePage } from './estate';

@NgModule({
  declarations: [
    EstatePage,
  ],
  imports: [
    IonicPageModule.forChild(EstatePage),
  ],
})
export class EstatePageModule {}
