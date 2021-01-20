import express, { json } from "express";
import morgan from "morgan";
import cors from "cors";

import homeRoute from "./routes/home.routes";
import operationRoute from "./routes/operations.routes";

const app = express();

// settings
app.set("port", process.env.PORT || 3000);

// middlewares
app.use(morgan("dev"));
app.use(cors());
app.use(json());

// routes
app.use(homeRoute);
app.use(operationRoute);

export default app;
