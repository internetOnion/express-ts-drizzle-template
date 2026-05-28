import { defineConfig } from "drizzle-kit";

export default defineConfig({
    dialect: "postgresql",
    schema: "./src/models/schema.ts",
    out: "./src/models/migrations",
    dbCredentials: {
        url: process.env.DATABASE_URL!,
    },
});
