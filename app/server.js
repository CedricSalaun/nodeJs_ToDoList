const express = require('express');
const bodyParser = require('body-parser');

const config = require('./config/config');
const port = config.port;
const index = require('./routes/index');

const app = express();


app.set('view engine', 'ejs');
app.set('views', 'src/Views');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use('/', index);

app.listen(port, ()=>{
    console.log('Listen on port : '+ port);
});
