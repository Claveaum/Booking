import {Injectable} from 'angular2/core';
import {Http}       from 'angular2/http';
import {BookingInterface}       from './bookingInterface';
import {Observable} from 'rxjs/Rx';

@Injectable()
export class BookingService {
    constructor(private http:Http) {
    }

    private logAndPassOn(error:Error) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return Observable.throw(error);
    }
}