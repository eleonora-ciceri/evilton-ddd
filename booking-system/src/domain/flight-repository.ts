import {FlightId} from "./flight-id";
import {Flight} from "./flight";

export interface FlightRepository {
    getById(id: FlightId): Flight
}