import {LayoutStatus} from "./layout-status";
import {Id} from "./id";
import {CabinDimension} from "./cabin-dimension";
import {CabinPart} from "./cabin-part";
import {Length} from "./length";
import {Width} from "./width";

export class CabinLayout {

    constructor(
        public readonly id: Id,
        private status: LayoutStatus,
        private dimension: CabinDimension,
        private parts: CabinPart[]
    ) { }

    static fromSnapshot(snapshot: { id: string; status: LayoutStatus; width: number; length: number; parts: any[]; }) {
        return new CabinLayout(
            new Id(snapshot.id),
            snapshot.status,
            new CabinDimension(new Width(snapshot.width), new Length(snapshot.length)),
            snapshot.parts.map(part => CabinPart.fromSnapshot(part))
        )
    }

    isDraft(): boolean {
        return this.status === LayoutStatus.Draft
    }

    toSnapshot() {
        return {
            id: this.id.value,
            status: this.status,
            dimension: {
                width: this.dimension.width,
                length: this.dimension.length
            },
            parts: this.parts.map(part => part.toSnapshot())
        }
    }

}
