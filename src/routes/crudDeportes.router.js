import Router from 'express'
const crudDeporte = Router();
import { leerDatos, nuevoDato } from '../controllers/deportes.controller.js';

crudDeporte.get('/leer', leerDatos);
crudDeporte.post('/agregar', nuevoDato);



export default crudDeporte;
