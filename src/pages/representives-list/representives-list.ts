import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { UsersProvider } from '../../providers/users/users';



@IonicPage()
@Component({
  selector: 'page-representives-list',
  templateUrl: 'representives-list.html',
})
export class RepresentivesListPage {
  endpoint:any = 'reps';
  representatives:any;
  loading:any;
  items:any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private httpProvider: UsersProvider,
    public loadingCtrl: LoadingController) {

      this.loading = this.loadingCtrl.create({
        content: 'Please wait...'
      }); 
      this.loading.present();
      this.getReps();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RepresentivesListPage');
  }

  getReps(){
    this.httpProvider.getJsonData(this.endpoint)
      .subscribe( result => {
        this.representatives = result;
        this.initializeItems();
        this.loading.dismiss();
      });
  }

  initializeItems() {
    this.items = this.representatives;
  }

  getItems(ev: any) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the searchbar
    let val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

}
