const express = require('express');
const routes = require('./routes'); //a barra é para dizer que é um arquivo e não um pacote 

const app = express();

app.use(express.json());
app.use(routes); //Importante vim após esse app.use(express.json());

app.listen(3333);