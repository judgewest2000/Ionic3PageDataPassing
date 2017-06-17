import { SessionProvider } from './../../providers/session/session';
import { Person } from './../../models/Person';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ViewPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-view',
  templateUrl: 'view.html',
})
export class ViewPage {

  item: Person = {
    firstName: 'Joe',
    lastName: 'Bloggs'
  }

  constructor(public navCtrl: NavController, public navParams: NavParams, private sp: SessionProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ViewPage');
  }

  edit() {
    this.navCtrl.push('EditPage', {
      item: this.item
    });
  }

  ionViewDidEnter() {
    const newdata = this.sp.get() as Person;
    if (newdata !== null) {
      this.item = newdata;
    }
  }

}
