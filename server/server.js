require('dotenv').config();
const express = require ('express');
const bodyParser = require ('body-parser') //using express not body-parser
const massive = require('massive')
const ctrl = require('./controller')

const {SERVER_PORT, CONNECTION_STRING } = process.env


const app = express();

app.use(bodyParser.json());

massive(CONNECTION_STRING).then(db => {
    app.set('db', db);
    console.log('Connected to database productshelfie');
});

app.get('/api/inventory', ctrl.getAllProducts);

app.post('/api/inventory', ctrl.createProduct);

app.delete('/api/inventory/:id', ctrl.deleteProduct);

app.put('/api/inventory/:id', ctrl.editProduct)





app.listen(SERVER_PORT, () => console.log(`002 Server Ready on port ${SERVER_PORT}`));