import path from 'node:path';
import { fileURLToPath } from 'node:url';
import fs from 'node:fs';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const dataDeportes = path.resolve(__dirname, '../wiews/private/deportes.json')

// export const leerDatos= ()=>{
//     try {
//         const data = fs.readFileSync(dataDeportes, 'utf8');
//         const respuesta = JSON.parse(data);
//         return respuesta;
//     } catch (err) {
//         console.error('Error leyendo los datos:', err);
//         return [];
//     }
// }

// const escribirDatos = (data)=> {
//     try {
//         fs.writeFileSync(dataDeportes, JSON.stringify(data, null, 2), 'utf8');
//     } catch (err) {
//         console.error('Error de escritura en base de datos:', err);
//     }
// }

// export const agregarDeporte = (req, res) => {
//     const { nombre } = req.body;

//     if (!nombre || !precio) {
//         return res.status(400).json({ message: 'Nombre y precio son obligatorios' });
//     }

//     const sportsData = leerDatos();
//     sportsData.push({ nombre, precio });
//     escribirDatos(sportsData);
//     res.json({ message: 'Deporte agregado exitosamente' });
// };
