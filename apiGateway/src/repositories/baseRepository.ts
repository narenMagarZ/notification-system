import { QueryResultRow } from "pg";
import { Pg } from "../config";

interface WriteRepositoryInterface<W, R> {
  create(input: W): Promise<R>
  updateOne(id: number, input: W): Promise<void>
  deleteOne(id: number): Promise<void>
}

interface ReadRepositoryInterface<W, R> {
  findByPk(id: number): Promise<R>;
}

export abstract class BaseRepository<W, R extends QueryResultRow> implements WriteRepositoryInterface<W, R>, ReadRepositoryInterface<W, R> {
  protected constructor(public readonly model: string) {}
  async findByPk(id: number): Promise<R> {
    const result = await Pg.client!.query<R>(`select * from ${this.model} where id = $1`, [id]);
    return result?.rows[0];
  }
  create(input: W): Promise<R> {
    throw new Error("Method not implemented.");
  }
  updateOne(id: number, input: W): Promise<void> {
    throw new Error("Method not implemented.");
  }
  deleteOne(id: number): Promise<void> {
    throw new Error("Method not implemented.");
  }
}