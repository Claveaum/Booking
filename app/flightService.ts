import {Injectable} from 'angular2/core';
import {Http}       from 'angular2/http';
import {Flight}       from './flight';
import {Observable} from 'rxjs/Rx';
import {RequestOptions} from "angular2/http";
import {RequestMethod} from "angular2/http";
import {URLSearchParams} from "angular2/http";

@Injectable()
export class FlightService {
    constructor(private http:Http) {
    }

    private _flightUrl = 'http://minesnantes-flights-api.herokuapp.com/flights';

    getFlights(airport_departure : string, airport_arrival : string,date : string) {
        var params  = new URLSearchParams();
        params.set('date',date);
        params.set('airport_departure',airport_departure);
        params.set('airport_arrival',airport_arrival);

        var options = new RequestOptions({
           search: params
        });

        return this.http.get(this._flightUrl, options)
            .map(res => <Flight[]> res.json())
            .catch(this.logAndPassOn);
    }

    private logAndPassOn(error:Error) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return Observable.throw(error);
    }
}