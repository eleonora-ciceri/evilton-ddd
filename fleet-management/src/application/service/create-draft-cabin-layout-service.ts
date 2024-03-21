import {CreateDraftCabinLayout} from "../command/create-draft-cabin-layout";
import {CabinLayout} from "../../domain/cabin-layout";
import {CabinPart} from "../../domain/cabin-part";
import {CabinPartType} from "../../domain/cabin-part-type";
import {Weight} from "../../domain/weight";
import {LayoutStatus} from "../../domain/layout-status";
import {CabinLayoutRepository} from "../../domain/cabin-layout-repository";

export class CreateDraftCabinLayoutService {

    constructor(
       private cabinLayoutRepository: CabinLayoutRepository
    ) {}

    handle(cmd: CreateDraftCabinLayout) {
        const head = new CabinPart(
            CabinPartType.Head,
            cmd.rowsInFront.reduce((acc, row) => acc.add(row.weight), Weight.zero()),
            cmd.rowsInFront
        )
        const tail = new CabinPart(
            CabinPartType.Tail,
            cmd.rowsInTail.reduce((acc, row) => acc.add(row.weight), Weight.zero()),
            cmd.rowsInTail
        )
        const cabinLayout = new CabinLayout(
            cmd.id,
            LayoutStatus.Draft,
            cmd.dimension,
            [head, tail]
        )
        this.cabinLayoutRepository.save(cabinLayout)

        return cabinLayout
    }
}