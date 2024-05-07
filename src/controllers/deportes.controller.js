import path from 'node:path';
import { fileURLToPath } from 'node:url';
import fs from 'node:fs';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const dataDeportes = path.resolve(__dirname, './deportes.json')

const leerDatos = () => {
  try {
    let datosSol = fs.readFileSync(dataDeportes);
    return JSON.parse(datosSol);
  } catch (err) {
    console.error('Error leyendo los datos:', err);
  }
}

export const presentarDatos = (req,res) => {
  try {
    let data = leerDatos();
    res.json(data.deportes);

  } catch (err) {
    console.error('Error presentando los datos:', err);
  }
}

const escribirDatos = (data) => {
  try {

      fs.writeFileSync(dataDeportes,JSON.stringify(data));
  } catch (err) {
    console.error('Error escribiendo los datos:', err);
  }
};

export const nuevoDato = (req, res) => {
  const datos=leerDatos();
  const body=req.body;
  const nuevoDeporte={
    id: datos.deportes.length + 1,
    ...body,
  };
  datos.deportes.push(nuevoDeporte);
  escribirDatos(datos);
  res.json(nuevoDeporte);
}

export const actualizarDato = (req, res) => {
  const datos = leerDatos();
  const body = req.body;
  const id = parseInt(req.params.id);
  const deporIndex = datos.deportes.findIndex((depor)=> depor.id === id);
  console.log(deporIndex);
  datos.deportes[deporIndex]={
    ...datos.deportes[deporIndex],
    ...body,
  };
  escribirDatos(datos);
  res.json({message:"Ha sido actualizado satisfactoriamente"});
}
export const eliminarDato = (req, res) => {
  const datos = leerDatos();
  const id = parseInt(req.params.id);
  console.log(id);
  const deporIndex = datos.deportes.findIndex((depor)=> depor.id === id);
  datos.deportes.splice(deporIndex,1)
  escribirDatos(datos);
  res.json({message:"Ha sido eliminado satisfactoriamente"});
}
