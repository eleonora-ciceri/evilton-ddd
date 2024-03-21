import {LayoutStatus} from "./layout-status";
import {Id} from "./id";
import {CabinDimension} from "./cabin-dimension";
import {CabinPart} from "./cabin-part";

export class CabinLayout {

    constructor(
        public readonly id: Id,
        private status: LayoutStatus,
        private dimension: CabinDimension,
        private parts: CabinPart[]
    ) { }

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
