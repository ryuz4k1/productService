const express               = require('express');
const AddProductController  = require('./controllers/addProduct.controller.js');

const app = express();
const router =  express.Router();

app.use(express.json()); // for parsing application/json


app.use('/', router);
new AddProductController(router);


const port = process.env.PORT || 4000;
app.listen(port,() => console.log(`Listening on port ${port}...`));