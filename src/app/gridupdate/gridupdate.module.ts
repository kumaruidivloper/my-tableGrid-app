import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {GridupdateComponent} from "./gridupdate.component";
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
    declarations: [
      GridupdateComponent
    ],
    imports: [
      BrowserModule,
      FormsModule,
      HttpModule,
      NgbModule.forRoot()
    ],
    providers: []
  })
  export class GridupdateModule { }