import Router from 'express'
const crudDeporte = Router();
import { actualizarDato, eliminarDato, nuevoDato, presentarDatos } from '../controllers/deportes.controller.js';

crudDeporte.get('/leer', presentarDatos);
crudDeporte.post('/agregar', nuevoDato);
crudDeporte.put('/actualizar/:id', actualizarDato);
crudDeporte.delete('/eliminarDato/:id', eliminarDato);



export default crudDeporte;
