import path from 'node:path';
import { fileURLToPath } from 'node:url';
import fs from 'node:fs';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const dataDeportes = path.resolve(__dirname, './deportes.json')
const respuestaHtml = path.resolve(__dirname,'../wiews/private/respuestas.html')

export const leerDatos= ()=>{
    try {
        const data = fs.readFileSync(dataDeportes, 'utf8');
        return data
    } catch (err) {
        console.error('Error leyendo los datos:', err);
        return [];
    }
}
export const escribeDatos= (data)=>{
    try {
        const datos = fs.writeFileSync(dataDeportes, JSON.stringify(data));
        return datos
    } catch (err) {
        console.error('Error leyendo los datos:', err);
        return [];
    }
}

export const pintarDatos = (req, res) => {
    const data = leerDatos();
    let nombre=req.body.nombre;
    let precio=req.body.precio;

    let reshtml = false;
    try {

        reshtml = fs.readFileSync(respuestaHtml, 'utf8', 'r')
        reshtml= reshtml.replace("%nombre%",nombre)
        reshtml= reshtml.replace("%precio%",precio)
        reshtml= reshtml.replace("%deportesLista%",data)

        res.send(reshtml);
    } catch (error) {
        res.status(404).send('archivo no encontrado' + error)
    }
};
