const express = require('express');
const path = require('path')
const morgan = require('morgan')
const mysql = require ('mysql')
const myConnection = require('express-myconnection')

const app = express();

//Rutas importación
const rutasCliente = require('./routes/cliente');


//Config
app.set('port', process.env.PORT || 3000)
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname,'views'))

//middleware
app.use(morgan('dev'));
app.use(myConnection(mysql,{
    host:'localhost',
    user: 'INGRESAR USUARIO SQL',
    password: '**INGRESAR PASS SQL**',
    port: 3306,
    database: 'examengm'
}, 'single'))
app.use(express.urlencoded({extended: false}));

//rutas
app.use('/', rutasCliente);

//estáticos
app.use(express.static(path.join(__dirname, 'public')));

app.listen(app.get('port'), () => {
  console.log(`server on port ${app.get('port')}`);
});
