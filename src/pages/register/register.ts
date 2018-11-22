import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserDataProvider } from '../../providers/user-data/user-data';
/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  private email: string = "";
  private password: string = "";
  private username: string = "";
  private errorMsg: string = "";

  constructor(public navCtrl: NavController, public navParams: NavParams,
              private userDataService: UserDataProvider) {
    this.userDataService.getObservable().subscribe(update=> {
      this.getMessage(update);
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  private registerUser(){
    // simple non-empty check
    if (this.email == "" || this.password == "" || this.username == ""){
      this.errorMsg = "Some fields are missing.";
      return;
    }
    this.userDataService.createAccount(this.email, this.password, this.username);

  }

  private getMessage(result: string){
    if (result != "success"){
      this.errorMsg = result;
    }
    else {
      
      this.navCtrl.pop();
    }

  }



}
