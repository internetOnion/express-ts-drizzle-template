import { Request, Response, NextFunction } from "express";
import { ZodSchema, ZodError } from "zod";
import { AppError } from "../utils/AppError";

function formatZodError(error: ZodError): string {
    return error.errors.map((e) => `${e.path.join(".")}: ${e.message}`).join(", ");
}

export function validateBody(schema: ZodSchema) {
    return (req: Request, _res: Response, next: NextFunction) => {
        try {
            req.body = schema.parse(req.body) as Record<string, unknown>;
            next();
        } catch (err) {
            if (err instanceof ZodError) {
                next(AppError.validation(formatZodError(err)));
            } else {
                next(err);
            }
        }
    };
}

export function validateQuery(schema: ZodSchema) {
    return (req: Request, _res: Response, next: NextFunction) => {
        try {
            req.query = schema.parse(req.query) as any;
            next();
        } catch (err) {
            if (err instanceof ZodError) {
                next(AppError.validation(formatZodError(err)));
            } else {
                next(err);
            }
        }
    };
}

export function validateParams(schema: ZodSchema) {
    return (req: Request, _res: Response, next: NextFunction) => {
        try {
            req.params = schema.parse(req.params) as Record<string, string>;
            next();
        } catch (err) {
            if (err instanceof ZodError) {
                next(AppError.validation(formatZodError(err)));
            } else {
                next(err);
            }
        }
    };
}
