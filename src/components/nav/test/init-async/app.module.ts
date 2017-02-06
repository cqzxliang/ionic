import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule } from '../../../../../ionic-angular';


@Component({
  template: `
    <ion-content padding text-center>
      Page be loaded!
    </ion-content>
  `
})
export class AsyncPage {}


@Component({
  template: `<ion-nav [root]="root"></ion-nav>`
})
export class E2EApp {
  root: AsyncPage;

  constructor() {
    setTimeout(() => {
      this.root = AsyncPage;
    }, 1000);

  }
}

@NgModule({
  declarations: [
    E2EApp,
    AsyncPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(E2EApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    E2EApp,
    AsyncPage
  ]
})
export class AppModule {}
