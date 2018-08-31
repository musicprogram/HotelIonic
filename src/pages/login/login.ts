import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {RemoteServicesProvider} from "../../providers/remote-services/remote-services";

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private services:RemoteServicesProvider ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
    this.sendLogin();
  }

  sendLogin(){
  	this.services.login({})
  	.then(data=>{
  		console.log(data);
  	})
  }

}
