export class PositionInCabin {
    readonly row: string
    readonly column: string

    constructor(row: string, column: string) {
        this.row = row
        this.column = column
    }
}