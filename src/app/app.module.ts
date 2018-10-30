import { Pro } from '@ionic/pro';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { DashboardPage } from '../pages/dashboard/dashboard';
import { AlertPage } from '../pages/alert/alert';
import { SignoffPage } from '../pages/signoff/signoff';
import { Signoff2Page } from '../pages/signoff2/signoff2';
import { ReghubPage } from '../pages/reghub/reghub';
import { Reghub2Page } from '../pages/reghub2/reghub2';
import { RegsenPage } from '../pages/regsen/regsen';
import { Regsen2Page } from '../pages/regsen2/regsen2';
import { DevicePage } from '../pages/device/device';
import { EstatePage } from '../pages/estate/estate';
import { Reghub3Page } from '../pages/reghub3/reghub3';
import { Regsen3Page } from '../pages/regsen3/regsen3';
import { Regsen4Page } from '../pages/regsen4/regsen4';
import { SensordtlPage } from '../pages/sensordtl/sensordtl';
import { SensorlocPage } from '../pages/sensorloc/sensorloc';
import { SensorconPage } from '../pages/sensorcon/sensorcon';
import { HubdtlPage } from '../pages/hubdtl/hubdtl';
import { HublocPage } from '../pages/hubloc/hubloc';
import { HubconPage } from '../pages/hubcon/hubcon';


// import { QRScanner } from '@ionic-native/qr-scanner';

// import { Toast } from '@ionic-native/toast';
// import { DataServiceProvider } from '../providers/data-service/data-service';
import { HttpModule } from '@angular/http';
import { Keyboard } from '@ionic-native/keyboard';
import { Camera } from '@ionic-native/camera';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { SQLite } from '@ionic-native/sqlite';
import { Toast } from '@ionic-native/toast';
import { StoreProvider } from '../providers/store/store';

Pro.init('34b51387', {
   appVersion: '1.0'
})

@NgModule({
  declarations: [
    MyApp,
    DashboardPage,
    AlertPage,
    SignoffPage,
    Signoff2Page,
    ReghubPage,
    Reghub2Page,
    Reghub3Page,
    RegsenPage,
    Regsen2Page,
    Regsen3Page,
    Regsen4Page,
    DevicePage,
    EstatePage,
    SensordtlPage,
    SensorlocPage,
    SensorconPage,
    HubdtlPage,
    HublocPage,
    HubconPage,
    HomePage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    DashboardPage,
    AlertPage,
    SignoffPage,
    Signoff2Page,
    ReghubPage,
    Reghub2Page,
    Reghub3Page,
    RegsenPage,
    Regsen2Page,
    Regsen3Page,
    Regsen4Page,
    DevicePage,
    EstatePage,
    SensordtlPage,
    SensorlocPage,
    SensorconPage,
    HubdtlPage,
    HublocPage,
    HubconPage,
    HomePage
  ],
  providers: [
    BarcodeScanner,
    Keyboard,
    Camera,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    SQLite,
    Toast,
    StoreProvider
  ]
})
export class AppModule {}
