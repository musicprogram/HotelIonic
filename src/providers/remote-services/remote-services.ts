import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {ToastController} from "ionic-angular";
/*
  Generated class for the RemoteServicesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RemoteServicesProvider {

	url_base:string = "http://dev.contanimacion.com/linkedinAPI/remote/";	

  constructor(public http: HttpClient, 
  			  private toastCtrl:ToastController) {
    console.log('Hello RemoteServicesProvider Provider');
  }

  sendToast(msg:string, classToast:string){
  	const toast = this.toastCtrl.create({
  		message: msg,
  		cssClass: classToast,
  		duration: 3000
  	})
  	toast.present();
  }

  public login(data){
  	
  	return new Promise(resolve=>{
  		this.http.post(this.url_base + "oauth/token", data)
  		.subscribe(
  			data=>{
  				console.log(data);
  				resolve(data);
  			},
  			err=>{
  				console.log(err.statusText + " : " + err.status);
  				this.sendToast("Error" + err.status + ":" + err.statusText, 'errorToast');

  			}
  		)
  	})
  	
 
  }

}
