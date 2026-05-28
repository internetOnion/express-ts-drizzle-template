import { Request, Response, NextFunction } from "express";
import { AppError } from "../utils/AppError";

export function notFound(_req: Request, _res: Response, next: NextFunction): void {
    next(AppError.notFound("Route not found"));
}
