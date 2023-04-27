import express from 'express'; 
import 'colors';
import * as dotenv from 'dotenv'; 
dotenv.config(); 
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import hbs from 'hbs'; 


const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();


// Handlebars 
app.set('view engine', 'hbs');

hbs.registerPartials( __dirname + '/views/partials')

// servir contenido estatico
app.use( express.static('public'));

app.get( '/', ( req, res )=>{
    res.render('home', {
        nombre: 'NODE NODE',
        titulo: 'curso node'
    });
})  

app.get('/generic',( req, res )=> {
    res.render('generic', {
        nombre: 'NODE NODE',
        titulo: 'curso node'
    });
})
app.get('/elements',( req, res )=> {
    res.render('elements', {
        nombre: 'NODE NODE',
        titulo: 'curso node'
    });
})

app.listen( process.env.PORT, ()=>{
    console.log(`Puerto: ${process.env.PORT} habilitado`.blue)
})






