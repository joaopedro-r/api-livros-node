import express from "express";
import livros from "./livrosRoutes";
import autores from "./autoresRoutes";

const routes = (app: express.Application) => {
  app.route("/").get((req: any, res: any) => {
    res.status(200).send("Curso de Node.js");
  });

  app.use(express.json(), livros, autores);
};

export default routes;
