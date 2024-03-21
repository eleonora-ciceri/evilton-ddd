import {Id} from "./id";
import {Length} from "./length";
import {SeatType} from "./seat-type";
import {RowSpot} from "./row-spot";
import {Weight} from "./weight";

export class Row {
    constructor(
        public id: Id,
        private seatType: SeatType,
        private seatMap: RowSpot[],
        private extraSpace: Length
    ) {
        if (!thereAreAisles(seatMap)) {
            throw Error('you need at least one aisle in the row')
        }

        if (leftWindowSeat(seatMap) == RowSpot.Aisle || rightWindowSeat(seatMap) === RowSpot.Aisle) {
            throw Error('you need to have seats close to the window')
        }
    }

    get weight(): Weight {
        const seatWeight = this.seatType.seatWeight
        return this.seatMap.reduce((sum: Weight, seat: RowSpot) => sum.add((seat === RowSpot.Seat ? seatWeight : Weight.zero())), Weight.zero())
    }

    toSnapshot() {
        return {
            id: this.id.value,
            seatType: this.seatType.toSnapshot(),
            seatMap: this.seatMap,
            extraSpace: this.extraSpace.value
        }
    }
}

const thereAreAisles = (seatMap: RowSpot[]) => seatMap.indexOf(0) >= 0
const leftWindowSeat = (seatMap: RowSpot[]) => seatMap[0]
const rightWindowSeat = (seatMap: RowSpot[]) => seatMap[seatMap.length - 1]