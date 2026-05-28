import pino from "pino";
import pinoHttp from "pino-http";
import { config } from "../config";

export const logger = pino({
    level: config.logLevel,
    ...(config.nodeEnv === "development" && {
        transport: {
            target: "pino-pretty",
            options: { colorize: true },
        },
    }),
});

export const pinoHttpMiddleware = pinoHttp({ logger });
