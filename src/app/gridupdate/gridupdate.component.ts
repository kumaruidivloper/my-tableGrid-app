import { Component, OnInit } from '@angular/core';
import { SharedService } from '../Share/shared.service';
import { AppI } from '../app.i';


@Component({
  selector: 'app-gridupdate',
  templateUrl: './gridupdate.component.html',
  styleUrls: ['./gridupdate.component.css']
})
export class GridupdateComponent implements OnInit {

  constructor(public sharedService: SharedService) { }

  public testData: AppI;
  ngOnInit() {
    this.testData = this.sharedService.getTestData();
    console.log("GRID :::::" + this.testData.title);
  }

}
