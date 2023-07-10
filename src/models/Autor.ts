import mongoose from "mongoose";
import { version } from "os";

const autorSchema = new mongoose.Schema(
  {
    id: { type: Number },
    nome: { type: String, required: true },
    nacionalidade: { type: String },
  },
  { versionKey: false }
);

const autores = mongoose.model("autores", autorSchema);

export default autores;
