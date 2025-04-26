import { Pool, PoolClient } from "pg";
import { pgConfigOptions } from ".";

class Pg {
  private static instance: Pg;
  private pgPoolClient: Pool;
  public client: PoolClient | null;
  private constructor() {
    this.pgPoolClient = new Pool(pgConfigOptions);
    this.client = null;
  }
  static get() {
    if(!Pg.instance) {
      Pg.instance = new Pg();
    }
    return Pg.instance;
  }

  public async connect(): Promise<void> {
    try {
      this.client = await this.pgPoolClient.connect();
      console.log("Postgres server connected successfully.")
    } catch (error) {
      console.log("Failed to connect to postgres server");
      throw error;      
    }
  }

}

const pg = Pg.get();
export { pg as Pg };