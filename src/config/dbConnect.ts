import mongoose from "mongoose";

mongoose.connect(
  "mongodb+srv://jpfla270800:AXBcKrBMcGMQKm2m@cluster0.siypwya.mongodb.net/alura-node"
);

let db = mongoose.connection;

export default db;
