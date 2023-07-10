import autores from "../models/Autor";

class AutoresController {
  static async getAutores(req: any, res: any) {
    try {
      const response = await autores.find();
      res.status(200).json(response);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  static async getAutorById(req: any, res: any) {
    let { id } = req.params;
    try {
      const response = await autores.findById(id);
      res.status(200).json(response);
    } catch (err) {
      res.status(400).send({ message: "Autor não encontrado!" });
    }
  }

  static async createAutor(req: any, res: any) {
    const autor = req.body;
    try {
      const response = await autores.create(autor);
      res.status(201).json(response);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  static async updateAutor(req: any, res: any) {
    let { id } = req.params;
    try {
      const autor = await autores.findByIdAndUpdate(id, req.body);
      res.status(200).json({ message: "autor atualizado com sucesso!" });
    } catch (err) {
      res.status(500).json({ message: "Erro ao atualizar o autor!" });
    }
  }

  static async deleteAutor(req: any, res: any) {
    let { id } = req.params;
    try {
      const autor = await autores.findByIdAndDelete(id);
      res.status(200).json({ message: "autor deletado com sucesso!" });
    } catch (err) {
      res.status(500).json({ message: "Erro ao deletar o autor!" });
    }
  }
}

export default AutoresController;
