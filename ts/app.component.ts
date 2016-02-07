/**
 * Created by mclaveau on 01/02/2016.
 */
import {Component} from 'angular2/core';
import {FlightInterface} from "./flightInterface";
import {HotelInterface} from "./hotelInterface";
import {Reservation} from "./reservation";
import {FlightService} from "./flightService";
import {OnInit} from "angular2/core";
import {HTTP_PROVIDERS} from "angular2/http";
import {FlightFormComponent} from "./flightFormComponent";
@Component({
    selector: 'my-app',
    templateUrl:'../html/app.html',
    providers:[FlightService,HTTP_PROVIDERS],
    directives: [FlightFormComponent],
})
export class AppComponent{
    public title = 'Formulaire réservation';
    public flights: FlightInterface[];
    constructor(private _flightService: FlightService) { };

    public hotels: HotelInterface[];
    public reservation : Reservation;


}