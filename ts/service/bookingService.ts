import {Injectable} from 'angular2/core';
import {Http}       from 'angular2/http';
import {BookingInterface}       from '../model/bookingInterface';
import {Observable} from 'rxjs/Rx';

@Injectable()
export class BookingService {
    private static url = 'http://localhost:5300/reservation';
    
    constructor(private http:Http) {
    }

    /**
     * Checkout the given booking
     */
    public checkout(booking: BookingInterface): void {
        this.http.post(BookingService.url, JSON.stringify(booking))
            .subscribe(console.log, console.error);
    }

    private logAndPassOn(error:Error) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return Observable.throw(error);
    }
}