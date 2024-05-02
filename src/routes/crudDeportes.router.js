import Router from 'express'
const crudDeporte = Router();
import { leerDatos, agregarDatos } from '../controllers/deportes.controller.js';

crudDeporte.post('/agregar', agregarDatos)



export default crudDeporte;
