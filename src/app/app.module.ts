import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GridModule } from './home-grid/grid.module';
import { SharedModule } from './shared/shared.module';
import { ErrorPageComponent } from './error-page/error-page.component';
import { AdminGridModule } from './admin-grid/admin-grid.module';
import { FobGridModule } from './fob-grid/fob-grid.module';

import { OrderModule } from 'ngx-order-pipe';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
// import { library } from '@fortawesome/fontawesome-svg-core';
// import {
//   faHome,
//   faChevronDown,
//   faProjectDiagram,
//   faPlaneDeparture,
//   faLock,
//   faLockOpen,
//   faSatellite,
//   faBroadcastTower,
//   faUserCog,
//   faUserShield,
//   faSatelliteDish,
//   faMapMarkerAlt,
//   faBoxes,
//   faTimes,
//   faHeartbeat,
//   faCog,
//   faBriefcaseMedical,
//   faUtensils,
//   faCrosshairs,
//   faExclamationTriangle,
// } from '@fortawesome/free-solid-svg-icons';
import { OfflineDialogComponent } from './offline-dialog/offline-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    ErrorPageComponent,
    OfflineDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GridModule,
    AdminGridModule,
    SharedModule,
    FobGridModule,
    FontAwesomeModule,
    OrderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    
  }
}
