/**
 * Created by mclaveau on 01/02/2016.
 */
import {Component,OnInit} from 'angular2/core';
import {HTTP_PROVIDERS} from "angular2/http";
import {FlightInterface} from "./flightInterface";
import {HotelInterface} from "./hotelInterface";
import {Reservation} from "./reservation";
import {FlightService} from "./flightService";
import {FlightFormComponent} from "./flightFormComponent";
import {HotelFormComponent} from "./hotelFormComponent";
@Component({
    selector: 'my-app',
    templateUrl:'../html/app.html',
    providers:[FlightService,HTTP_PROVIDERS],
    directives: [FlightFormComponent,HotelFormComponent],
})
export class AppComponent{
    public selectedFlight: FlightInterface;
    public selectedHotels: HotelInterface[];
    public reservation : Reservation;

    updateFlight(updatedFlight :FlightInterface){
        this.selectedFlight = updatedFlight;
    }
    get test() { return JSON.stringify(this.selectedFlight); }

}