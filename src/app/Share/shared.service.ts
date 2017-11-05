import { HttpClient } from '@angular/common/http';
import { AppI } from '../app.i';
import { Injectable } from '@angular/core';

@Injectable ()

export class SharedService {
    constructor ( public Http: HttpClient){

    }

    public testData: AppI;
    public setTestData ( data: AppI){
        this.testData = data;
    }

    public getTestData(){
        return this.testData;
    }
}