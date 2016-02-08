import {Component,OnInit} from 'angular2/core';
import {NgForm}    from 'angular2/common';
import {HTTP_PROVIDERS} from "angular2/http";
import {HotelImpl} from "../model/hotelImpl";
import {BookingService} from "../service/bookingService";
import {BookingInterface} from "../model/bookingInterface";
import {BookingImpl} from "../model/bookingImpl";
import {FlightImpl} from "../model/flightImpl";

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