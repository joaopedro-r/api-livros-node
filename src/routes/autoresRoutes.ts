import express from 'express';
import AutoresController from '../controllers/autoresController';

const router = express.Router();

router.get('/autores', AutoresController.getAutores);
router.get('/autores/:id', AutoresController.getAutorById);
router.post('/autores', AutoresController.createAutor);
router.put('/autores/:id', AutoresController.updateAutor);
router.delete('/autores/:id', AutoresController.deleteAutor);

export default router;