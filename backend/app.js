import dotenv from "dotenv";
dotenv.config({ quiet: true });

import cors from "cors";
import express from "express";
import helmet from "helmet";
import morgan from "morgan";

import { errorMiddleware } from "./src/middlewares/error.middleware.js";

import userRoutes from "./src/routes/user/user.route.js";

const app = express();

app.use(
  cors({
    credentials: true,
    origin: process.env.FRONTEND_URL,
  })
);
app.use(express.json()); //? to handle json data
app.use(express.urlencoded({ extended: true })); //? to handle form data
app.use(morgan("dev"));
app.use(
  helmet({
    crossOriginResourcePolicy: false,
  })
);

app.use("/api/v1/user", userRoutes);

app.use(errorMiddleware);

export default app;
