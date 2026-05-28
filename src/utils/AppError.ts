export class AppError extends Error {
    public readonly statusCode: number;

    private constructor(message: string, statusCode: number) {
        super(message);
        this.statusCode = statusCode;
        Object.setPrototypeOf(this, AppError.prototype);
    }

    static badRequest(message = "Bad request"): AppError {
        return new AppError(message, 400);
    }

    static unauthorized(message = "Unauthorized"): AppError {
        return new AppError(message, 401);
    }

    static forbidden(message = "Forbidden"): AppError {
        return new AppError(message, 403);
    }

    static notFound(message = "Resource not found"): AppError {
        return new AppError(message, 404);
    }

    static conflict(message = "Conflict"): AppError {
        return new AppError(message, 409);
    }

    static validation(message = "Validation error"): AppError {
        return new AppError(message, 422);
    }

    static internal(message = "Internal server error"): AppError {
        return new AppError(message, 500);
    }
}
