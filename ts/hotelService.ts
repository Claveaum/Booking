/**
 * Created by mclaveau on 07/02/2016.
 */
import {Injectable} from 'angular2/core';
import {Http}       from 'angular2/http';
import {HotelInterface}       from './hotelInterface';
import {Observable} from 'rxjs/Rx';

@Injectable()
export class HotelService {
    constructor(private http:Http) {
    }

    private _hotelUrl = 'https://aqueous-shelf-23293.herokuapp.com/room/location/';

    getHotels(airport_arrival : string) {
        return this.http.get(this._hotelUrl+airport_arrival)
            .map(res => <HotelInterface[]> res.json())
            .catch(this.logAndPassOn);
    }

    private logAndPassOn(error:Error) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return Observable.throw(error);
    }
}