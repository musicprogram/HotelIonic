import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';


import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


import { LoginPage } from '../pages/login/login';
import { ActividadesPage } from '../pages/actividades/actividades';
import { MisActividadesPage } from '../pages/mis-actividades/mis-actividades';
import { SetUpPage } from '../pages/set-up/set-up';
import { ActividadDetailPage } from '../pages/actividad-detail/actividad-detail';
import { UserDetailPage } from '../pages/user-detail/user-detail';
import { RemoteServicesProvider } from '../providers/remote-services/remote-services';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    LoginPage,
    ActividadesPage,
    MisActividadesPage,
    SetUpPage,
    ActividadDetailPage,
    UserDetailPage

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    LoginPage,
    ActividadesPage,
    MisActividadesPage,
    SetUpPage,
    ActividadDetailPage,
    UserDetailPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    RemoteServicesProvider
  ]
})
export class AppModule {}
