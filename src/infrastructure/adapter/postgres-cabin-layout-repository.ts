import {CabinLayoutRepository} from "../../domain/cabin-layout-repository";
import {CabinLayout} from "../../domain/cabin-layout";
import {CabinLayoutsDAL} from "../../data-access/cabin-layouts-dal";
import {Pool} from "pg";
import {Id} from "../../domain/id";

export class PostgresCabinLayoutRepository implements CabinLayoutRepository {
    constructor(
        public dal: CabinLayoutsDAL,
        public pool: Pool
    ) { }

    async save(layout: CabinLayout): Promise<void> {
        const snapshot = layout.toSnapshot()
        const query = `INSERT INTO fleetops.cabin_layouts (layout_id, layout_data)
                       VALUES ($1, $2)`;
        await this.pool.query(query, [snapshot.id, JSON.stringify(snapshot)]);
    }

    async get(id: Id): Promise<CabinLayout | null> {
        const query = `SELECT layout_data, __version
                       FROM fleetops.cabin_layouts
                       WHERE layout_id = $1`;
        const res = await this.pool.query(query, [id.value]);

        if (res.rows.length) {
            return this.map(res.rows[0].layout_data);
        } else {
            return null;
        }
    }

    private map(unitData: any): CabinLayout {
        const result = unitData as CabinLayout;
        return result
    }

}