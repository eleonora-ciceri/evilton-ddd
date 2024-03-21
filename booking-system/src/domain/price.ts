export class Price {
    readonly value: number

    constructor(value: number) {
        this.value = value
    }

    static zero() {
        return new Price(0)
    }

    add(price: Price) {
        return new Price(this.value + price.value)
    }
}