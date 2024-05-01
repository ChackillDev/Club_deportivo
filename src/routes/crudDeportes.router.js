import Router from 'express'
const crudDeporte = Router();
import { leerDatos } from '../controllers/deportes.controller.js';

crudDeporte.get('/leer', leerDatos)


export default crudDeporte;
