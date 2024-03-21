export class Weight {
    readonly value: number

    constructor(value: number) {
        this.value = value
    }

    static zero() {
        return new Weight(0)
    }

    add(weight: Weight) {
        return new Weight(this.value + weight.value)
    }
}