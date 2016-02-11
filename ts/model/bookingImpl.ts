import {BookingInterface} from "./bookingInterface";
import {FlightInterface} from "./flightInterface";
import {HotelInterface} from "./hotelInterface";

export class BookingImpl implements BookingInterface {
    price(): number {
        return this.flight.price + this.hotel.price;
    }

    constructor(public flight?: FlightInterface,
                public hotel?:HotelInterface,
                public client?: string) {}


}