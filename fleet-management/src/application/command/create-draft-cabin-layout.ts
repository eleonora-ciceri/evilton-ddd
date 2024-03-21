import {Id} from "../../domain/id";
import {CabinDimension} from "../../domain/cabin-dimension";
import {Row} from "../../domain/row";

export class CreateDraftCabinLayout {
    constructor(
        public id: Id,
        public dimension: CabinDimension,
        public rowsInFront: Row[],
        public rowsInTail: Row[]
    ) {}
}