var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastController } from "ionic-angular";
/*
  Generated class for the RemoteServicesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var RemoteServicesProvider = /** @class */ (function () {
    function RemoteServicesProvider(http, toastCtrl) {
        this.http = http;
        this.toastCtrl = toastCtrl;
        this.url_base = "http://dev.contanimacion.com/linkedinAPI/remote/";
        console.log('Hello RemoteServicesProvider Provider');
    }
    RemoteServicesProvider.prototype.sendToast = function (msg, classToast) {
        var toast = this.toastCtrl.create({
            message: msg,
            cssClass: classToast,
            duration: 3000
        });
        toast.present();
    };
    RemoteServicesProvider.prototype.login = function (data) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.post(_this.url_base + "oauth/token", data)
                .subscribe(function (data) {
                console.log(data);
                resolve(data);
            }, function (err) {
                console.log(err.statusText + " : " + err.status);
                _this.sendToast("Error" + err.status + ":" + err.statusText);
            });
        });
    };
    RemoteServicesProvider = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [HttpClient,
            ToastController])
    ], RemoteServicesProvider);
    return RemoteServicesProvider;
}());
export { RemoteServicesProvider };
//# sourceMappingURL=remote-services.js.map