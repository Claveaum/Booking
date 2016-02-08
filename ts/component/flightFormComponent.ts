import {Component,EventEmitter,OnInit,Output} from 'angular2/core';
import {NgForm}    from 'angular2/common';
import {HTTP_PROVIDERS} from "angular2/http";
import {FlightImpl} from "../model/flightImpl";
import {FlightService} from "../service/flightService";
import {FlightInterface} from "../model/flightInterface";

@Component({
    selector: 'flight-form',
    templateUrl: 'html/flight-form.component.html',
    providers:[FlightService,HTTP_PROVIDERS],
})
export class FlightFormComponent{
    model = new FlightImpl('','','','','');
    public flights : FlightInterface[];
    @Output() flightEvent = new EventEmitter();
    submitted = false;
    onSubmit() {
        this.submitted = true;
        this.searchFlight(this.model.airport_departure,this.model.airport_arrival,this.model.date_departure);
    }

    active = true;

    // TODO: Remove this when we're done
    get diagnostic() { return JSON.stringify(this.flights); }

    constructor(private _flightService: FlightService) { };
    searchFlight(dep,arr,dat) {
        this._flightService.getFlights(dep,arr,dat)
            .subscribe(
                f => this.flights = f,
                error => alert(`Server error. Try again later`));
    }

    onClickFlight(flight : FlightInterface){
        this.flightEvent.emit(flight);
    }


}