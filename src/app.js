const express = require('express'); //mini framework para crear websapplications rapidas.
const logger = require('morgan'); //middleware que escucha los eventos del servidor y nos lo muestra en consola
const bodyParser = require('body-parser'); //renderisa las vistas
const path = require('path'); //ruta del projecto cn path de nodejs
const indexRoutes = require('./routes/index.js'); //definicion de el js que contndra las rutas.

const app = express();

//settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname,'views')); //ocupamos path de nodejs para definir las rutas y no tener problemas en otros OS.
app.set('view engine','ejs');
//middlewares
app.use(logger('dev'));
app.use(bodyParser.urlencoded({extended: false}));

//routes
app.use('/', indexRoutes);

app.listen(app.get('port'),()=>{ console.log(`server on port: localhost:${app.get('port')}`);});
