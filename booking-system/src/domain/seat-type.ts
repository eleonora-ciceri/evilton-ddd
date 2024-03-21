import {Price} from "./price";
import {ComfortLevel} from "./comfort-level";

export class SeatType {
    readonly premiumCost: Price
    readonly comfortLevel: ComfortLevel

    constructor(premiumCost: Price, comfortLevel: ComfortLevel) {
        this.premiumCost = premiumCost
        this.comfortLevel = comfortLevel
    }
}