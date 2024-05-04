import path from 'node:path';
import { fileURLToPath } from 'node:url';
import fs from 'node:fs';
import { json } from 'express';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const dataDeportes = path.resolve(__dirname, './deportes.json')


export const leerDatos = () => {
  try {
    const data = fs.readFileSync(dataDeportes);
    return JSON.parse(data);

  } catch (err) {
    console.error('Error leyendo los datos:', err);
  }
}

const escribirDatos = (data) => {
  try {

    fs.writeFileSync(dataDeportes,JSON.stringify(data));

  } catch (err) {
    console.error('Error escribiendo los datos:', err);
    return [];
  }
};

export const nuevoDato = (req, res) => {
  const datosOld=leerDatos();
  const body=req.body;
  const datosAct=datosOld.deportes.push(body);
  escribirDatos(datosAct);
  res.json(body)
}
