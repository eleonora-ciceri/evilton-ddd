import {Callsign} from "./callsign";

export class FlightId {
    readonly callsign: Callsign
    readonly date: Date

    constructor(callsign: Callsign, date: Date) {
        this.callsign = callsign
        this.date = date
    }
}