import {Component, OnInit, Input, Output, EventEmitter} from "@angular/core";
import { AppService } from "../app.service"
import { AppI } from "../app.i";
import { Router} from '@angular/router';
import { SharedService } from '../Share/shared.service';


@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
    providers: [AppService]
})
export class HomeComponent implements OnInit {

     

    _postsArray: AppI[];

    constructor(private apiSerivce: AppService, private router: Router, public sharedService: SharedService) {

    }

    getPosts(): void {
        this.apiSerivce.getPosts()
            .subscribe(
                resultArray => this._postsArray = resultArray,
                error => console.log("Error :: " + error)
            )
    }

    ngOnInit(): void {
        this.getPosts();
    }
    

    public currentRow;
    public selectedRowObj;

    
    isRowHiglighted:boolean = false;
    //@Output() selectedObj = new EventEmitter;
    public toggleBg(post:any, index:any, event: any){
      this.isRowHiglighted = true;
      console.log(index + " " + event + "   "+this.isRowHiglighted);
      this.currentRow = index;
      //this.selectedRowObj = post;
      this.sharedService.setTestData(post);
      //console.log(this.selectedRowObj);
    //this.selectedObj.emit(post);
    }

    public redirectComponent(){
        this.router.navigate(['/Home/gridUpdate']);
    }


}
