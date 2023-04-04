import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import bfs_search from "./searchController.js";

const app = express();
dotenv.config();
const DB = process.env.DB;
const PORT = process.env.PORT;
app.use(express.json());

app.get('/bfs_search', bfs_search);

mongoose.connect(DB, console.log("Connected to database sucessfully"));

app.listen(PORT, console.log(`Connected to ${PORT}`));