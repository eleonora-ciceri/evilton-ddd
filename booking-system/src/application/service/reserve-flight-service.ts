import {ReserveFlight} from "../command/reserve-flight";
import {FlightRepository} from "../../domain/flight-repository";
import {ReservationRepository} from "../../domain/reservation-repository";

export class ReserveFlightService {

    constructor(
        private flightRepository: FlightRepository,
        private reservationRepository: ReservationRepository
    ) {}
    handle(cmd: ReserveFlight) {
        const flight = this.flightRepository.getById(cmd.flightId)
        const reservation = flight.createReservation(cmd.reservationId)
        this.reservationRepository.save(reservation)
    }
}