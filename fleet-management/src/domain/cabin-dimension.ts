import {Length} from "./length";
import {Width} from "./width";

export class CabinDimension {
    readonly width: Width
    readonly length: Length

    constructor(width: Width, length: Length) {
        this.width = width
        this.length = length
    }
}