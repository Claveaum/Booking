/**
 * Created by mclaveau on 01/02/2016.
 */
import {Component,OnInit} from 'angular2/core';
import {HTTP_PROVIDERS} from "angular2/http";
import {FlightInterface} from "./model/flightInterface";
import {HotelInterface} from "./model/hotelInterface";
import {BookingInterface} from './model/bookingInterface';
import {BookingImpl} from './model/bookingImpl';
import {FlightService} from "./service/flightService";
import {FlightFormComponent} from "./component/form/flightFormComponent";
import {HotelFormComponent} from "./component/form/hotelFormComponent";
import {BookingFormComponent} from "./component/form/bookingFormComponent";

@Component({
    selector: 'my-app',
    templateUrl:'../html/app.html',
    providers:[FlightService,HTTP_PROVIDERS],
    directives: [FlightFormComponent,HotelFormComponent,BookingFormComponent]
})
export class AppComponent{
    public booking: BookingInterface = new BookingImpl();
    
    /** Set to true when all of booking has been filled */
    private bookingComplete: boolean = false;

    updateFlight(updatedFlight :FlightInterface){
        this.booking.flight = updatedFlight;
        // Ensure location will be the same
        this.bookingComplete = false;
    }
    
    private updateHotel(updatedHotel: HotelInterface): void {
        this.booking.hotel = updatedHotel;
        this.bookingComplete = true;
    }
}