import express from "express";
import cors from "cors";
import morgan from "morgan";
import imageUpload from "express-fileupload";

import { router } from "./routes/indexRoutes";

import { errorHandler, notFound } from "./helpers/errors";

const app = express();
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(imageUpload());

app.use("/uploads", express.static("./uploads"));
app.use("/uploads/avatars", express.static("./uploads/avatars"));

app.use(router);

app.use(notFound);

app.use(errorHandler);

export default app;
