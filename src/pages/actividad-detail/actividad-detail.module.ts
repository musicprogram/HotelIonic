import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ActividadDetailPage } from './actividad-detail';

@NgModule({
  declarations: [
    ActividadDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(ActividadDetailPage),
  ],
})
export class ActividadDetailPageModule {}
