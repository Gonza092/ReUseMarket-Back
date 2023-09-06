import { Sequelize } from "sequelize";

const { PG_HOST, PG_USER, PG_PASSWORD, PG_DATABASE } = process.env;

export const sequelize = new Sequelize(PG_DATABASE!, PG_USER!, PG_PASSWORD, {
  host: PG_HOST,
  dialect: "postgres",
});
