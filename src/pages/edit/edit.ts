import { SessionProvider } from './../../providers/session/session';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup } from "@angular/forms";

/**
 * Generated class for the EditPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-edit',
  templateUrl: 'edit.html',
})
export class EditPage {

  form: FormGroup;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private fb: FormBuilder,
    private sp: SessionProvider
  ) {

    this.form = fb.group({
      firstName: [''],
      lastName: ['']
    });

    const data = navParams.get('item');

    this.form.patchValue(data);

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditPage');
  }

  save() {
    this.sp.post(this.form.value, this.navCtrl);
  }

}
