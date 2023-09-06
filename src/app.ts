import express from "express";
import cors from "cors";
import morgan from "morgan";

import { router } from "./routes/indexRoutes";

import { errorHandler, notFound } from "./helpers/errors";

const app = express();
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

app.use(router);

app.use(notFound);

app.use(errorHandler);

export default app;
