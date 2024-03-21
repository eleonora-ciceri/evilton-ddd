import {Reservation} from "./reservation";

export interface ReservationRepository {
    save(reservation: Reservation): void
}