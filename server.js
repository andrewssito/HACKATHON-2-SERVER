const express = require('express');
const app = express();
const cors = require('cors');
const port = 8888;
const pokerouter = require('./routes/pokeroutes');
app.use(express.static('./public'));



app.use(cors());

app.use(express.json());

app.use('/pokemon', pokerouter);

app.listen(port, error => error? console.error(error):console.info(`I am running ${port}`));


