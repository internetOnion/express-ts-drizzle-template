import express from "express";
import helmet from "helmet";
import cors from "cors";
import { config } from "./config";
import { pinoHttpMiddleware } from "./utils/logger";
import { routes } from "./routes";
import { notFound } from "./middlewares/notFound";
import { errorHandler } from "./middlewares/errorHandler";

const app = express();

app.use(helmet());
app.use(cors({ origin: config.corsOrigin }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(pinoHttpMiddleware);

app.use("/api", routes);

app.use(notFound);
app.use(errorHandler);

export default app;
