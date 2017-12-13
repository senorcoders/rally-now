import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController} from 'ionic-angular';
import { EventsResultPage } from '../events-result/events-result';
import { OrganizationsProvider } from '../../providers/organizations/organizations';


@IonicPage()
@Component({
  selector: 'page-filter-events',
  templateUrl: 'filter-events.html', 
})
export class FilterEventsPage {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,  
    public viewCtrl: ViewController,
    private httpProvider:OrganizationsProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FilterEventsPage');
  }
  dismiss() {
    this.viewCtrl.dismiss();
  }

  public event = {
    month: '2017-10-01',
    timeStarts: '07:43',
    timeEnds: '2017-12-31'
}

zipcode:any = "22207";
structure:number = 0;
endpoint:any = 'events/';
enable:boolean = false;

goToEvents(){
  console.log(this.zipcode, this.structure, this.event.month, this.event.timeEnds);
  this.httpProvider.getJsonData(this.endpoint + this.zipcode + '/' + this.event.month + '/' +  this.event.timeEnds + '/' + this.structure)
  .subscribe(
    result => {
        console.log("Events Filtered", JSON.stringify(result));
        this.navCtrl.push(EventsResultPage, {
          'events' : result,
          'startDate': this.event.month,
          'endDate': this.event.timeEnds
        });
        
    },
    err =>{
      console.error("Error : "+err);
    } ,
    () => {
      console.log('getData completed');
    }
  );
 }


 getDistance(){
   console.log("Estructura", this.structure);
   if(this.structure === 1000){
    this.enable = true;
   }
 }
}
