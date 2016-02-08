import {FlightInterface} from "./flightInterface";
import {HotelInterface} from "./hotelInterface";
/**
 * Created by mclaveau on 01/02/2016.
 */
export interface Reservation {
    hotel : HotelInterface;
    flight : FlightInterface;
    client : string;
}