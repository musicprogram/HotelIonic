import { Component } from '@angular/core';


import { ActividadesPage } from '../actividades/actividades';
import { MisActividadesPage } from '../mis-actividades/mis-actividades';
import { SetUpPage } from '../set-up/set-up';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = ActividadesPage;
  tab2Root = MisActividadesPage;
  tab3Root = SetUpPage;

  constructor() {

  }
}
