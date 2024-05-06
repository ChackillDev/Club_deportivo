import Router from 'express'
const crudDeporte = Router();
import { nuevoDato, presentarDatos } from '../controllers/deportes.controller.js';

crudDeporte.get('/leer', presentarDatos);
crudDeporte.post('/agregar', nuevoDato);



export default crudDeporte;
