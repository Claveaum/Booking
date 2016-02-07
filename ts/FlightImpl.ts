/**
 * Created by mclaveau on 06/02/2016.
 */
import {FlightInterface} from "./flightInterface";
export class FlightImpl implements FlightInterface{
    number:string;
    date_departure:string;
    date_arrival:string;
    airport_departure:string;
    airport_arrival:string;

    constructor(
    number:string,
    date_departure:string,
    date_arrival:string,
    airport_departure:string,
    airport_arrival:string){}

}