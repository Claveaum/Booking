import {FlightInterface} from "./flightInterface";
import {HotelInterface} from "./hotelInterface";

export interface BookingInterface {
    flight: FlightInterface;
    flight2: FlightInterface;
    hotel: HotelInterface;
    price: number;
}