import express, { Express, Response, Request, NextFunction } from "express";
import { corsOptions, Pg, port } from './config';
import { Redis } from './config/redis';
import cors from "cors";
import { TransactionProxyRouter } from "./routes/transaction";
import { ChatProxyRouter, OrderProxyRouter } from "./routes";

class App {
  
  private app: Express;

  public constructor() {
    this.app = express();
  }
  
  public async startServer() {
    await this.connectDB();
    this.setupConfiguration();
    this.app.use(express.json());
    this.app.use(express.urlencoded({extended: false}));
    this.app.use("/api/v1", TransactionProxyRouter.map());
    this.app.use("/api/v1", OrderProxyRouter.map());
    this.app.use("/api/v1", ChatProxyRouter.map());
    this.app.listen(port);
    this.app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
      res.status(500);
      res.json({
        message: "Internal server error",
        success: false,
        code: 500
      });
    })
  }

  private setupConfiguration() {
    this.app.use(cors(corsOptions))
  }

  private async connectDB() {
    try {
      await Pg.connect();
      await Redis.connect();
    } catch (error) {
      console.error("Error", error);
    }
  }

}

const app = new App();
app.startServer();