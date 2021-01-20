import express, { json } from "express";
import morgan from "morgan";
import cors from "cors";

const app = express();

// settings
app.set("port", process.env.PORT || 3000);

// middlewares
app.use(morgan("dev"));
app.use(cors());
app.use(json());

// routes
app.get("/", (req, res) => {
  res.send("Hello  World!");
});

export default app;
