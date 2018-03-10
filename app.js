const express = require('express');

const index = require('./routes/index');

const app = express();

app.use('/', index);

app.set('port',process.env.port || 5001);

app.listen(app.get('port'), ()=>{
    console.log('Server now listening on port: '+app.get('port'));
});