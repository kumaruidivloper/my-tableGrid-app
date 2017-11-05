import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tableupdate',
  templateUrl: './tableupdate.component.html',
  styleUrls: ['./tableupdate.component.css']
})
export class TableupdateComponent implements OnInit {


  showMessage: string = 'test';

  constructor() { }

  ngOnInit() {
  }
  
}
