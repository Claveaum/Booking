import {BookingInterface} from "./bookingInterface";
import {FlightImpl} from "./FlightImpl";
import {HotelImpl} from "./hotelImpl";
export class BookingImpl implements BookingInterface {
    flight:FlightImpl;
    flight2:FlightImpl;
    hotel:HotelImpl;
    price:number;

    constructor(flight:FlightImpl,
                flight2:FlightImpl,
                hotel:HotelImpl,
                price:number) {
    }


}