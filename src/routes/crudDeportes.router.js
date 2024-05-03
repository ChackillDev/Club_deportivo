import Router from 'express'
const crudDeporte = Router();
import { leerDatos, pintarDatos } from '../controllers/deportes.controller.js';

crudDeporte.post('/leer', leerDatos);
crudDeporte.post('/agregar', pintarDatos);



export default crudDeporte;
