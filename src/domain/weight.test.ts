import {expect, test} from "vitest";
import {Weight} from "./weight";

test('it can be added to another weight', () => {
    const aWeight = new Weight(1)
    const anotherWeight = new Weight(2)

    const sum = aWeight.add(anotherWeight)

    expect(sum.value).toBe(1 + 2)
})