import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { Contacts, Contact } from '@ionic-native/contacts';
import { SocialShareProvider } from '../../providers/social-share/social-share';


@IonicPage()
@Component({
  selector: 'page-invite-friends',
  templateUrl: 'invite-friends.html',
})
export class InviteFriendsPage {

  public listaContactos:Contact[]=[];
  avatar:string="assets/icon/avatar.png";


  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public viewCtrl: ViewController,
    private contacts:Contacts,
    private socialProvider: SocialShareProvider) {
      this.cargarListaContactos();
      console.log(this.contacts);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InviteFriendsPage');
  }

  ionViewWillEnter(){
   
    this.viewCtrl.setBackButtonText("Sync Contacts");
  }

  cargarListaContactos(){
    this.contacts.find(["*"])
    .then(res => {
      // console.log({funcion:'CargarListaContactos',res:res})
      // let datosMostar:any[]=[];
      // res.map((item) =>{
      //   if(item.displayName != null && item.photos != null && item.phoneNumbers != null){
      //     datosMostar.push({displayName:item.displayName,photos:[{value:this.avatar}],phoneNumbers:item.phoneNumbers})
      //   }        
      // })
      // console.log({funcion:'CargarListaContactos',datosMostar:datosMostar})
      this.listaContactos = res;

      console.log("Contactos", res);
    },error => {
      console.log({error:error})
    })
  }

  sendInvitation(phone){
    this.socialProvider.shareViaSMS(phone);
  } 

  sendEmailInvitation(email){
    this.socialProvider.sendEmailInvitation(email);
  }

}
