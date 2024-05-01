import Router from 'express'
const router = Router();
import { main } from '../controllers/main.controller.js';
import { leerDatos } from '../controllers/deportes.controller.js';

router.get('/', main)
router.get('/leer', leerDatos)


export default router;
