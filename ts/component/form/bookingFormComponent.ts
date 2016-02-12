import {Component,EventEmitter, Input, OnInit,Output} from 'angular2/core';
import {NgForm}    from 'angular2/common';
import {HTTP_PROVIDERS} from "angular2/http";
import {HotelImpl} from "../../model/hotelImpl";
import {BookingService} from "../../service/bookingService";
import {BookingInterface} from "../../model/bookingInterface";
import {BookingImpl} from "../../model/bookingImpl";
import {FlightImpl} from "../../model/flightImpl";
import {DateFromStringPipe} from '../../util/pipe/dateFromStringPipe';

@Component({
    selector: 'booking-form',
    templateUrl: 'html/form/booking-form.component.html',
    providers: [BookingService, HTTP_PROVIDERS],
    pipes: [DateFromStringPipe]
})
export class BookingFormComponent {
    @Input() model: BookingInterface;
    
    public checkoutStatus = '';
    
    submitted = false;
    private checkout(): void {
        this.submitted = true;
        this._bookingService.checkout(this.model)
            .subscribe(this.onCheckoutSuccess, this.onCheckoutError);
    }

    active = true;

    onCheckoutSuccess() {
        console.log('Success');
        this.checkoutStatus = 'Your order has been registered!';
        console.log(this.checkoutStatus);
    }

    onCheckoutError() {
        console.log('Error');
        this.checkoutStatus = 'An error occured during registration';
    }
    
    constructor(private _bookingService: BookingService) { };
}