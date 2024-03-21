import {CabinLayoutRepository} from "../../domain/cabin-layout-repository";
import {CabinLayout} from "../../domain/cabin-layout";
import {Pool} from "pg";
import {Id} from "../../domain/id";

export class PostgresCabinLayoutRepository implements CabinLayoutRepository {
    constructor(
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
            const snapshot = res.rows[0].layout_data
            return CabinLayout.fromSnapshot(snapshot)
        } else {
            return null;
        }
    }

}