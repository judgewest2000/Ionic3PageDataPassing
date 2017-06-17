import { NavController } from 'ionic-angular';
import { Injectable } from '@angular/core';



@Injectable()
export class SessionProvider {

  private data: any = null;

  get() {
    let data = this.data;
    this.data = null;
    return data;
  }

  post(item: any, navCtrl: NavController) {
    this.data = item;
    navCtrl.pop();
  }

}
