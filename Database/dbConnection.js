import mongoose from "mongoose";

export const db = mongoose
  .connect("mongodb://localhost:27017/sarahaClone")
  .then(() => {
    console.log("DataBase Connection Successfully");
  });
