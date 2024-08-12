import { model, Schema } from "mongoose";

const schema = new Schema({
  message: String,
  user: String,
});

export const Message = model("Message", schema);
