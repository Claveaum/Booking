import {FlightInterface} from "./flightInterface";
import {Hotel} from "./hotel";
/**
 * Created by mclaveau on 01/02/2016.
 */
export interface Reservation {
    hotel : Hotel;
    flight : FlightInterface;
    client : string;
}