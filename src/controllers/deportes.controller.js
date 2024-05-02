import path from 'node:path';
import { fileURLToPath } from 'node:url';
import fs from 'node:fs';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const dataDeportes = path.resolve(__dirname, '../wiews/private/deportes.json')
const respuestaHtml = path.resolve(__dirname,'../wiews/private/respuestas.html')


export const leerDatos= ()=>{
    try {
        const data = fs.readFileSync(dataDeportes, 'utf8');
        const respuesta = JSON.parse(data);

        return respuesta
    } catch (err) {
        console.error('Error leyendo los datos:', err);
        return [];
    }
}

// const escribirDatos = (data)=> {
//     try {
//         fs.writeFileSync(dataDeportes, JSON.stringify(data, null, 2), 'utf8');
//     } catch (err) {
//         console.error('Error de escritura en base de datos:', err);
//     }
// }

export const agregarDatos = (req, res) => {
    let nombre=req.body.nombre;
    let precio=req.body.precio;
    let reshtml = false;
    try {
        reshtml = fs.readFileSync(respuestaHtml, 'utf8', 'r')
        reshtml= reshtml.replace("%nombre%",nombre)
        reshtml= reshtml.replace("%precio%",precio)
        res.send(reshtml);
    } catch (error) {
        res.status(404).send('archivo no encontrado' + error)
    }



};
