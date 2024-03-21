import {FlightId} from "./flight-id";
import {TailNumber} from "./tail-number";
import {Price} from "./price";
import {AirportName} from "./airport-name";
import {Seat} from "./seat";
import {Reservation} from "./reservation";
import {Id} from "./id";

export class Flight {
    constructor(
        public id: FlightId,
        private tailNumber: TailNumber,
        private baseCost: Price,
        private arrivalAirport: AirportName,
        private departureAirport: AirportName,
        private seats: Seat[]
    ) {}

    createReservation(id: Id) {
        // TODO break if seats are already allocated
        // TODO otherwise, associate such seats with a passenger
        // TODO associate each passenger with the reservation id
        return new Reservation(id)
    }
}