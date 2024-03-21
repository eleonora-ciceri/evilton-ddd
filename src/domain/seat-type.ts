import {Length} from "./length";
import {Id} from "./id";
import {Weight} from "./weight";

export class SeatType {
    readonly id: Id
    private weight: Weight
    private pitch: Length

    constructor(id: Id, weight: Weight, pitch: Length) {
        this.id = id
        this.weight = weight
        this.pitch = pitch
    }

    get seatWeight(): Weight {
        return this.weight;
    }

    toSnapshot() {
        return {
            id: this.id.value,
            weight: this.weight.value,
            pitch: this.pitch.value
        }
    }
}