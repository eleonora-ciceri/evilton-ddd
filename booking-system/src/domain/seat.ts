import {PositionInCabin} from "./position-in-cabin";
import {SeatType} from "./seat-type";
import {Passenger} from "./passenger";

export class Seat {

    constructor(
        position: PositionInCabin,
        seatType: SeatType,
        passenger?: Passenger
    ) {  }
}