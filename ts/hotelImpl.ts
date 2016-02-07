/**
 * Created by mclaveau on 07/02/2016.
 */
import {HotelInterface} from "./hotelInterface";
export class HotelImpl implements HotelInterface{
    name : string;
    location : string;

    constructor(
        name : string,
    location : string){}

}