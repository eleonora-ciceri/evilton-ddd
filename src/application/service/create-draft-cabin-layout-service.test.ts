import {expect, test} from "vitest";
import * as td from 'testdouble'
import {CreateDraftCabinLayoutService} from "./create-draft-cabin-layout-service";
import {CabinLayoutRepository} from "../../domain/cabin-layout-repository";
import {CreateDraftCabinLayout} from "../command/create-draft-cabin-layout";
import {Id} from "../../domain/id";
import {CabinDimension} from "../../domain/cabin-dimension";
import {Width} from "../../domain/width";
import {Length} from "../../domain/length";
import {Row} from "../../domain/row";
import {RowSpot} from "../../domain/row-spot";
import {SeatType} from "../../domain/seat-type";
import {Weight} from "../../domain/weight";

test('create cabin layouts as draft and save it', () => {
    const seatType = new SeatType(new Id('BIZ-ADV'),new Weight(28), new Length(120))
    const id = new Id('id')
    const dimension = new CabinDimension(new Width(10), new Length(20))
    const row = new Row(new Id('1'), seatType, [RowSpot.Seat, RowSpot.Aisle, RowSpot.Seat], new Length(120))
    const repository = td.object<CabinLayoutRepository>()
    const createDraftCabinLayoutService = new CreateDraftCabinLayoutService(repository)

    const cabinLayout = createDraftCabinLayoutService.handle(new CreateDraftCabinLayout(id, dimension, [row], [row]))

    expect(cabinLayout.isDraft()).toBeTruthy
    td.verify(repository.save(td.matchers.anything()))
})