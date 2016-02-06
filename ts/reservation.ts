import {Flight} from "./flight";
import {Hotel} from "./hotel";
/**
 * Created by mclaveau on 01/02/2016.
 */
export interface Reservation {
    hotel : Hotel;
    flight : Flight;
    client : string;
}