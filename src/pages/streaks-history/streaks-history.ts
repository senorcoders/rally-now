import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FeedPage } from '../feed/feed';
import { AlertsPage } from '../alerts/alerts';
import { ProfilePage } from '../profile/profile';
import { PopoverController } from 'ionic-angular';
import { OverlayPage } from '../overlay/overlay'
import { UsersProvider } from '../../providers/users/users';
import { timestamp } from 'ionic-native/node_modules/rxjs/operator/timestamp';



@IonicPage()
@Component({
  selector: 'page-streaks-history',
  templateUrl: 'streaks-history.html',
})
export class StreaksHistoryPage {
  endpoint:any = 'actions?user_id=';
  currentRallyID:any;
  streaks:any;
  actions_taken:any;
  shares:any;
  starCount:number = 0;
  replacedDate:any = '';
  public starArray:any[] = [];
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,  
    public popoverCtrl: PopoverController,
    private httpProvider: UsersProvider) {
        this.httpProvider.returnRallyUserId().then( 
          user => {
              this.currentRallyID = user.apiRallyID;
              this.getStreaks();
          }
        );
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StreaksHistoryPage');
  }

    goToHome(){
    this.navCtrl.setRoot(FeedPage,  {}, {animate:true,animation:'transition',duration:500,direction:'forward'});
  }

  goToAlerts(){
    this.navCtrl.setRoot(AlertsPage,  {}, {animate:true,animation:'transition',duration:500,direction:'forward'});
  }

  goToProfile(){
    this.navCtrl.setRoot(ProfilePage,  {}, {animate:true,animation:'transition',duration:500,direction:'forward'});
  }

  presentPopover() {
       let popover = this.popoverCtrl.create(OverlayPage);
       popover.present();
     }

     getStreaks(){
       this.httpProvider.getJsonData(this.endpoint + this.currentRallyID)
        .subscribe( result =>{
          //console.log(JSON.stringify(result));
          //this.streaks = result;
          this.streaks = [
            {created_at: '2017-11-06TSomething'},
            {created_at: '2017-11-06TSomething'},
            {created_at: '2017-11-05TSomething'},
            {created_at: '2017-11-04TSomething'},
            {created_at: '2017-11-02TSomething'},
            {created_at: '2017-11-01TSomething'}
          ];
          console.log(this.replacedDate);
          
          for(let i=0; i < this.streaks.length; i++ ){
              let cuttedStreak = this.streaks[i].created_at.split('T');
              let date = cuttedStreak[0];             
              date = date.split('-');
              console.log("Date: ", date);
              let newDate = date[1]+"/"+date[2]+"/"+date[0];
              let timestampDate = new Date(newDate).getTime();
              console.log("Racha: ", timestampDate);
              
              
               if(this.replacedDate != ""){
                  if(timestampDate < this.replacedDate){
                    console.log("Fecha a reemplazar", this.replacedDate); 
                    console.log("Fecha Actual", timestampDate);
                    let difference = this.replacedDate - timestampDate;
                    let ms = difference / 1000;
                    let seconds = ms % 60;
                    ms /= 60;
                    let minutes = ms % 60;
                    ms /= 60;
                    let hours = ms % 24;
                    ms /= 24;
                    let days = ms;
                    console.log("Difference: ", days);
                    this.replacedDate = timestampDate;

                    if (days <= 1){
                        if(days != 0){
                          this.starCount++;
                          this.starArray.push({days: days});
                        }  
                    }
                    
                  }

              }else{
                this.replacedDate = timestampDate;
              }
            
          }
          this.actions_taken = result[0].user_id[0].actions_taken;
          this.shares = result[0].user_id[0].shares;
          console.log("Numero de estrellas: ", this.starCount);
          console.log(this.starArray);
          
          
        });
     }

}
