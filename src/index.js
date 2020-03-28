const express = require('express');
const cors = require('cors');
const { errors } = require('celebrate');
const routes = require('./routes'); //a barra é para dizer que é um arquivo e não um pacote 

const app = express();

app.use(cors()); // Diz que aplicação front pode acessar a minha API
app.use(express.json());
app.use(routes); //Importante vim após esse app.use(express.json());
app.use(errors());
app.listen(3333);