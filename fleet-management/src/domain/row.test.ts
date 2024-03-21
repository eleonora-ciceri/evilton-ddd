import {Id} from "./id";
import {SeatType} from "./seat-type";
import {Weight} from "./weight";
import {Length} from "./length";
import {expect, test} from "vitest";
import {Row} from "./row";
import {RowSpot} from "./row-spot";

test('it has at least one aisle', () => {
    const seatType = new SeatType(new Id('BIZ-ADV'),new Weight(28), new Length(120))

    expect(() => new Row(new Id('1'), seatType, [RowSpot.Seat, RowSpot.Aisle, RowSpot.Seat], new Length(120))).not.toThrow(Error)
    expect(() => new Row(new Id('1'), seatType, [RowSpot.Seat, RowSpot.Seat, RowSpot.Seat], new Length(120))).toThrow(Error)
})

test('it has one seat for each window', () => {
    const seatType = new SeatType(new Id('BIZ-ADV'),new Weight(28), new Length(120))

    expect(() => new Row(new Id('1'), seatType, [RowSpot.Seat, RowSpot.Seat, RowSpot.Aisle], new Length(120))).toThrow(Error)
})

test('it has a weight', () => {
    const seatType = new SeatType(new Id('BIZ-ADV'),new Weight(28), new Length(120))
    const row = new Row(new Id('1'), seatType, [RowSpot.Seat, RowSpot.Aisle, RowSpot.Seat], new Length(120))

    const weight = row.weight

    expect(weight.value).toBe(28*2)
})