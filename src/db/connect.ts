import mongoose from "mongoose";

mongoose.connect(`${process.env.DB_URI}`)
  .then(() => console.log('db connected'))