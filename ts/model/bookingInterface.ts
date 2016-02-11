import {FlightInterface} from "../model/flightInterface";
import {HotelInterface} from "../model/hotelInterface";

export interface BookingInterface {
    client: string;
    flight: FlightInterface;
    hotel: HotelInterface;
    price(): number;
}