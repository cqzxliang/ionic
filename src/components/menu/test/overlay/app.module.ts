import { Component, ViewChild, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, Nav, AlertController } from '../../../../../ionic-angular';


@Component({templateUrl: 'page1.html'})
export class Page1 {}


@Component({
  templateUrl: 'main.html'
})
export class E2EApp {
  @ViewChild(Nav) nav: Nav;

  rootView = Page1;

  constructor(public alertCtrl: AlertController) { }

  openPage(menu: any, page: any) {
    // close the menu when clicking a link from the menu
    menu.close();

    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  showAlert() {
    let alert = this.alertCtrl.create({
      title: 'Alert example',
      buttons: ['Ok']
    });
    alert.present();
  }
}

@NgModule({
  declarations: [
    E2EApp,
    Page1
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(E2EApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    E2EApp,
    Page1
  ]
})
export class AppModule {}
