import {Component,OnInit} from 'angular2/core';
import {NgForm}    from 'angular2/common';
import {HTTP_PROVIDERS} from "angular2/http";
import {HotelImpl} from "./hotelImpl";
import {BookingService} from "./bookingService";
import {BookingInterface} from "./bookingInterface";
import {BookingImpl} from "./bookingImpl";
import {FlightImpl} from "./FlightImpl";

@Component({
    selector: 'booking-form',
    templateUrl: 'html/booking-form.component.html',
    providers:[BookingService,HTTP_PROVIDERS],
})
export class BookingFormComponent{
    public bookings : BookingInterface[];
    submitted = false;
    onSubmit() {
        this.submitted = true;
    }

    active = true;

    constructor(private _bookingService: BookingService) { };

}