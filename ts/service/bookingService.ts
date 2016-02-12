import {Injectable} from 'angular2/core';
import {Http,Headers,Response,RequestOptionsArgs}       from 'angular2/http';
import {BookingInterface}       from '../model/bookingInterface';
import {Observable} from 'rxjs/Rx';

@Injectable()
export class BookingService {
    private static url = 'http://192.168.56.99:59560/reservation';
    private static httpRequestArgs = {
        headers: new Headers({
            "Content-Type": "application/json"
        })
    };
    
    constructor(private http:Http) {
    }

    /**
     * Checkout the given booking
     */
    public checkout(booking: BookingInterface): Observable<Response> {
        return this.http.post(BookingService.url, JSON.stringify(booking), BookingService.httpRequestArgs);
    }

    private logAndPassOn(error:Error) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return Observable.throw(error);
    }
}