import {FlightInterface} from "../model/flightInterface";
import {HotelInterface} from "../model/hotelInterface";

export interface BookingInterface {
    flight: FlightInterface;
    flight2: FlightInterface;
    hotel: HotelInterface;
    price: number;
}