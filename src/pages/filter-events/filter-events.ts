import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController} from 'ionic-angular';
import { EventsResultPage } from '../events-result/events-result';
import { OrganizationsProvider } from '../../providers/organizations/organizations';
import { Storage } from '@ionic/storage';


@IonicPage()
@Component({
  selector: 'page-filter-events',
  templateUrl: 'filter-events.html', 
})
export class FilterEventsPage {

  public event = {
    month: '',
    timeStarts: '07:43',
    timeEnds: ''
}
zipcode:any = "22207";
structure:number = 50;
endpoint:any = 'events/';
enable:boolean = false;
text:any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,  
    public viewCtrl: ViewController,
    private httpProvider:OrganizationsProvider,
    private storage: Storage) {
      this.text = "50 MILES";
      console.log(new Date());
      var today = new Date();
      var dd:any = today.getDate();
      var mm:any = today.getMonth()+1;
      var yyyy = today.getFullYear();
      var next_year = today.getFullYear()+1;

      if (dd<10){
        dd = '0'+dd;
      }

      if(mm<10){
        mm = '0'+mm;
      }

      this.event.month = yyyy + '-' + mm + '-' + dd;
      this.event.timeEnds = next_year + '-' + mm + '-' + dd;
      console.log(this.event.month);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FilterEventsPage');
  }
  dismiss() {
    this.viewCtrl.dismiss();
  }

 

goToEvents(){  
  console.log(this.zipcode, this.structure, this.event.month, this.event.timeEnds);
  this.storage.set('startDate', this.event.month);
  this.storage.set('endDate', this.event.timeEnds);
  this.dismiss();
  // this.httpProvider.getJsonData(this.endpoint + this.zipcode + '/' + this.event.month + '/' +  this.event.timeEnds + '/' + this.structure)
  // .subscribe(
  //   result => {
  //       console.log("Events Filtered", JSON.stringify(result));
  //       // this.navCtrl.push(EventsResultPage, {
  //       //   'events' : result,
  //       //   'startDate': this.event.month,
  //       //   'endDate': this.event.timeEnds
  //       // });
        

        
  //   },
  //   err =>{
  //     console.error("Error : "+err);
  //   } ,
  //   () => {
  //     console.log('getData completed');
  //   }
  // );
 }


 

 getDistance(){
   console.log("Estructura", this.structure);
   if(this.structure > 99){
     this.text = "ANY DISTANCE";
     this.structure = 4000;
   }else if(this.structure < 1){
    this.text = "< 1 MILE";
   }
   else{
     this.text = this.structure + ' MILES';
   }
 }
}
