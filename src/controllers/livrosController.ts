import livros from "../models/livro";

class LivrosController {
  static async getLivros(req: any, res: any) {
    let { autor, editora } = req.query;
    try {
      const response = await livros
        .find(autor ? { autor: autor } : editora ? { editora: editora } : {})
        .populate("autor")
        .exec();
      res.status(200).json(response);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  static async getLivroById(req: any, res: any) {
    let { id } = req.params;
    try {
      const response = await livros
        .findById(id)
        .populate("autor", "nome")
        .exec();
      res.status(200).json(response);
    } catch (err) {
      res.status(400).send({ message: "Livro não encontrado!" });
    }
  }

  static async createLivro(req: any, res: any) {
    const livro = req.body;
    try {
      const response = await livros.create(livro);
      res.status(201).json(response);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  static async updateLivro(req: any, res: any) {
    let { id } = req.params;
    try {
      const livro = await livros.findByIdAndUpdate(id, req.body);
      res.status(200).json({ message: "Livro atualizado com sucesso!" });
    } catch (err) {
      res.status(500).json({ message: "Erro ao atualizar o livro!" });
    }
  }

  static async deleteLivro(req: any, res: any) {
    let { id } = req.params;
    try {
      const livro = await livros.findByIdAndDelete(id);
      res.status(200).json({ message: "Livro deletado com sucesso!" });
    } catch (err) {
      res.status(500).json({ message: "Erro ao deletar o livro!" });
    }
  }
}

export default LivrosController;
