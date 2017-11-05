import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs/Observable";
import "rxjs/Rx";
import { AppI } from "./app.i";

@Injectable()
export class AppService {

    private _postsURL = "https://jsonplaceholder.typicode.com/posts";

    constructor(private http: Http) {
    }

    getPosts(): Observable<AppI[]> {
        return this.http
            .get(this._postsURL)
            .map((response: Response) => {
                return <AppI[]>response.json();
            })
            .catch(this.handleError);
    }

    private handleError(error: Response) {
        return Observable.throw(error.statusText);
    }
}