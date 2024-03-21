import {expect, test} from "vitest";
import {Price} from "./price";

test('it can be added to another price', () => {
    const aPrice = new Price(1)
    const anotherPrice = new Price(2)

    const sum = aPrice.add(anotherPrice)

    expect(sum.value).toBe(1 + 2)
})