import {CabinPartType} from "./cabin-part-type";
import {Weight} from "./weight";
import {Row} from "./row";

export class CabinPart {

    constructor(
        public readonly type: CabinPartType,
        private weight: Weight,
        private rows: Row[]
    ) { }
}