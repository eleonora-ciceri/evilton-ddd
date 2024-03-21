import {CabinPartType} from "./cabin-part-type";
import {Weight} from "./weight";
import {Row} from "./row";

export class CabinPart {

    constructor(
        public readonly type: CabinPartType,
        private weight: Weight,
        private rows: Row[]
    ) { }

    static fromSnapshot(snapshot: { type: CabinPartType; weight: number; rows: any[]; }) {
        return new CabinPart(
            snapshot.type,
            new Weight(snapshot.weight),
            snapshot.rows.map(row => Row.fromSnapshot(row))
        )
    }

    toSnapshot() {
        return {
            type: this.type,
            weight: this.weight.value,
            rows: this.rows.map(row => row.toSnapshot())
        }
    }
}