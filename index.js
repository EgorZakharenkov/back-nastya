import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import { checkAuth } from "./utlis/index.js";

import {
  UserController,
  ReviewController,
  ExcursionController,
  BronController,
} from "./controllers/index.js";
const app = express();

app.use(express.json());
app.use(cors());

mongoose
  .connect(
    "mongodb+srv://nastya:wwwwww@diplomnastya.xicftwg.mongodb.net/?retryWrites=true&w=majority&appName=DiplomNastya",
  )
  .then(() => {
    console.log("Db ok.............");
  })
  .catch((err) => {
    console.log("db no.............");
    console.log(err);
  });

app.listen(4444 || process.env.PORT, (err) => {
  if (err) {
    return console.log(err);
  } else {
    console.log("Server ok");
  }
});

// AUTH-------------------------------------------------------

app.post("/auth/login", UserController.login);

app.post("/auth/register", UserController.register);

app.get("/auth/me", checkAuth, UserController.getMe);

// Review-------------------------------------------------------

app.get("/review", ReviewController.getAllReviews);
app.get("/review/:id", ReviewController.getReviewById);
app.post("/review", ReviewController.createReview);
app.put("/review/:id", ReviewController.updateReview);
app.delete("/review/:id", ReviewController.deleteReview);

// Excursion-------------------------------------------------------

app.get("/excursion", ExcursionController.getAllExcursions);
app.get("/excursion/:id", ExcursionController.getExcursionById);
app.post("/excursion", ExcursionController.createExcursion);
app.put("/excursion/:id", ExcursionController.updateExcursion);
app.delete("/excursion/:id", ExcursionController.deleteExcursion);

//bron

app.post("/bron", BronController.create);
