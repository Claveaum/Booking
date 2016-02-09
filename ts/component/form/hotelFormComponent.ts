import {Component,EventEmitter,Input,Output} from 'angular2/core';
import {NgForm}    from 'angular2/common';
import {HTTP_PROVIDERS} from "angular2/http";
import {Observable} from 'rxjs/Rx';
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
    /** Arrival flight */
    private model: FlightInterface;
    
    /** Flight setter */
    @Input('flight') set setFlight(_flight: FlightInterface) {
        this.model = _flight;
        this.search();
    }
    
    @Output('hotel-selected') hotelEvent = new EventEmitter<HotelInterface>(); 
    
    /** Selectable hotels */
    private hotels: HotelInterface[];
    
    /**
     * Use hotel service to get corresponding hotels.
     * Clean hotels if flight is undefined
     */
    private search(): void {
        console.log(this.model);
        if (!this.model) {
            this.hotels = null;
            return;
        }
        
        this.hotelService.getHotels(this.model.airport_arrival)
            .subscribe(
                hotels => this.hotels = hotels,
                console.error
            );
    }
    
    hotelSelected(hotel: HotelInterface): void {
        console.log(`Selected hotel ${hotel}`);
        this.hotelEvent.emit(hotel);
    }
    
    constructor(private hotelService: HotelService) {}
}