import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import Connection from "./database/db.js";
import Routes from "./routes/Route.js";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));
app.use("/api", Routes);

const PORT = 8000;
const url = process.env.MONGO_URL;

Connection(url);
app.listen(PORT, () => console.log(`Server Running on port ${PORT}`));
