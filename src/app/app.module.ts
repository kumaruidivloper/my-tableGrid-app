import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {RouterModule, Routes} from "@angular/router";
import { HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { TableupdateComponent } from './tableupdate/tableupdate.component';
import { GridupdateComponent } from './gridupdate/gridupdate.component';
import { HomeComponent } from './home/home.component';
import { SharedService } from './Share/shared.service';

const appRoutes: Routes = [
  {
    path: '',  // localhost
    component: HomeComponent
  },
  {
    path: 'Home/gridUpdate', // localhost/gridUpdate
    component: GridupdateComponent
  },
  {
    path: 'Home', // localhost/home
    component: HomeComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    TableupdateComponent,
    GridupdateComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
  ],
  providers: [ SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
