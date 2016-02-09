import {FlightInterface} from "../model/flightInterface";
import {HotelInterface} from "../model/hotelInterface";

export interface BookingInterface {
    flight: FlightInterface;
    hotel: HotelInterface;
    price(): number;
}