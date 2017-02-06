import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, FabContainer } from '../../../../../ionic-angular';

@Component({
  templateUrl: 'main.html'
})
export class E2EPage {
  array: number[] = [];
  log: string = '';

  add() {
    this.array.push(1);
    this.log += 'add\n';
  }

  clickMainFAB() {
    let message = 'Clicked open social menu';

    console.log(message);
    this.log += message + '\n';
  }

  openSocial(network: string, fab: FabContainer) {
    let message = 'Share in ' + network;

    console.log(message);
    this.log += message + '\n';

    fab.close();
  }
}


@Component({
  template: '<ion-nav [root]="root"></ion-nav>'
})
export class E2EApp {
  root: any = E2EPage;
}

@NgModule({
  declarations: [
    E2EApp,
    E2EPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(E2EApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    E2EPage
  ]
})
export class AppModule {}
