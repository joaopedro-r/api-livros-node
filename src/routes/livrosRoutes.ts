import express from 'express';
import LivrosController from '../controllers/livrosController';

const router = express.Router();

router.get('/livros', LivrosController.getLivros);
router.get('/livros/:id', LivrosController.getLivroById);
router.post('/livros', LivrosController.createLivro);
router.put('/livros/:id', LivrosController.updateLivro);
router.delete('/livros/:id', LivrosController.deleteLivro);

export default router;