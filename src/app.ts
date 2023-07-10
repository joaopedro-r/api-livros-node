import express from "express";
import db from "./config/dbConnect";
import livros from "./models/livro";
import routes from "./routes/index";

db.on("error", console.log.bind(console, "connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB");
});
const app = express();
app.use(express.json());

routes(app);


export default app;
