import {Component,Input} from 'angular2/core';
import {NgForm}    from 'angular2/common';
import {HTTP_PROVIDERS} from "angular2/http";
import {HotelImpl} from "../../model/hotelImpl";
import {HotelService} from "../../service/hotelService";
import {HotelInterface} from "../../model/hotelInterface";
import {FlightInterface} from "../../model/flightInterface";

@Component({
    selector: 'hotel-form',
    templateUrl: 'html/form/hotel-form.component.html',
    providers:[HotelService,HTTP_PROVIDERS],
})
export class HotelFormComponent{
    model = new HotelImpl('','',0,'');
    public hotels : HotelInterface[];
    submitted = false;
    onSubmit() {
        this.submitted = true;
    }

    active = true;

    @Input() set mapFlight(flight: FlightInterface){
        this.searchHotel(flight);
    }

    // TODO: Remove this when we're done
    get diagnostic() { return JSON.stringify(this.hotels); }

    constructor(private _hotelService: HotelService) { };
    searchHotel(arr) {
        this._hotelService.getHotels(arr)
            .subscribe(
                f => this.hotels = f,
                error => alert(`Server error. Try again later`));
    }


}