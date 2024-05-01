import express from 'express';
import chalk from 'chalk';
import mainRouter from './src/routes/main.router.js';
import path from 'node:path';
import { fileURLToPath } from 'url';

const app = express();
const PORT = process.env.PORT || 4000;


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middlewares rutas

app.use(mainRouter);
app.use(express.static(path.join(__dirname,'src/wiews/public')));


// servidor
app.listen(PORT, ()=>{
    console.log(chalk.bgYellow(`El servidor esta disponible en:`+(chalk.bgCyan.blue(`http://localhost:${PORT}`))))}
);
