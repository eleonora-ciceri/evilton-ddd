import {FlightId} from "../../domain/flight-id";
import {Id} from "../../domain/id";

export class ReserveFlight {
    constructor(
        public reservationId: Id,
        public flightId: FlightId
    ) {}
}