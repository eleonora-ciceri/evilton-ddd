import {Id} from "./id";

export class Passenger {
    readonly reservationId: Id

    constructor(reservationId: Id) {
        this.reservationId = reservationId
    }
}