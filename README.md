# Express TypeScript Drizzle Template

A Express.js template with TypeScript, Drizzle ORM, and PostgreSQL using Layered Architecture Pattern.

## Project Structure

```
express-ts-drizzle-template/
├── .env
├── .env.example
├── .gitignore
├── .prettierrc
├── drizzle.config.ts
├── package.json
├── package-lock.json
├── tsconfig.json
├── dist/
└── src/
    ├── index.ts
    ├── app.ts
    ├── config/
    │   └── index.ts
    ├── controllers/
    │   └── index.ts
    ├── middlewares/
    │   ├── errorHandler.ts
    │   ├── notFound.ts
    │   └── validate.ts
    ├── models/
    │   ├── database.ts
    │   ├── schema.ts
    │   └── migrations/
    │       └── meta/
    │           └── _journal.json
    ├── repositories/
    │   └── index.ts
    ├── routes/
    │   └── index.ts
    ├── schemas/
    │   └── index.ts
    ├── services/
    │   └── index.ts
    ├── types/
    │   └── index.ts
    └── utils/
        ├── AppError.ts
        └── logger.ts
```

## Dependencies

### Production

| Package     | Version | Description                              |
| ----------- | ------- | ---------------------------------------- |
| cors        | ^2.8.5  | Cross-Origin Resource Sharing middleware |
| dotenv      | ^16.4.7 | Load environment variables from .env     |
| drizzle-orm | ^0.44.7 | TypeScript ORM for SQL databases         |
| express     | ^4.21.2 | Web framework for Node.js                |
| helmet      | ^8.1.0  | Security HTTP headers middleware         |
| pg          | ^8.16.3 | PostgreSQL client for Node.js            |
| pino        | ^9.7.0  | Fast JSON logger                         |
| pino-http   | ^10.4.0 | HTTP logger middleware for Pino          |
| pino-pretty | ^13.1.3 | Pino prettifier for development          |
| zod         | ^3.24.4 | TypeScript-first schema validation       |

### Development

| Package        | Version   | Description                   |
| -------------- | --------- | ----------------------------- |
| @types/cors    | ^2.8.18   | TypeScript types for cors     |
| @types/express | ^5.0.3    | TypeScript types for Express  |
| @types/node    | ^22.15.29 | TypeScript types for Node.js  |
| @types/pg      | ^8.11.14  | TypeScript types for pg       |
| drizzle-kit    | ^0.31.7   | Drizzle ORM migration toolkit |
| prettier       | ^3.8.3    | Code formatter                |
| tsx            | ^4.19.4   | TypeScript execution engine   |
| typescript     | ^5.8.3    | TypeScript compiler           |

## Scripts

```bash
npm run dev          # Start development server with hot reload
npm run build        # Compile TypeScript to JavaScript
npm run start        # Start production server
npm run db:push      # Push schema changes to database
npm run db:generate  # Generate migration files
npm run db:migrate   # Run pending migrations
npm run db:studio    # Open Drizzle Studio
npm run format       # Format code with Prettier
npm run format:check # Check code formatting
```

## Getting Started

1. Clone the repository
2. Install dependencies: `npm install`
3. Copy `.env.example` to `.env` and configure your database
4. Push schema to database: `npm run db:push`
5. Start development server: `npm run dev`
