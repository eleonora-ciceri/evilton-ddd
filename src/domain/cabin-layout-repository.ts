import {CabinLayout} from "./cabin-layout";
import {Id} from "./id";

export interface CabinLayoutRepository {
    save(layout: CabinLayout): Promise<void>
    get(id: Id): Promise<CabinLayout | null>
}