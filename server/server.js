require('dotenv').config();
const express = require ('express');
// const body-parser = require ('body-parser') //using express not body-parser
const massive = require('massive')
const ctrl = require('./controller')

const {SERVER_PORT, CONNECTION_STRING } = process.env


const app = express();

app.use(express.json());

massive(CONNECTION_STRING).then(db => {
    app.set('db', db);
    console.log('Connected to database productshelfie');
});

app.get('/api/products', ctrl.getAllProducts);

app.post('/api/product', ctrl.createProduct)






app.listen(SERVER_PORT, () => console.log(`002 Server Ready on port ${SERVER_PORT}`));