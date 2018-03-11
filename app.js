const express = require('express');
const index = require('./routes/index');
const app = express();
const handlebars = require('express-handlebars').create({defaultLayout:'main'});

app.use('/', index);
app.use('/js', express.static(__dirname + '/node_modules/bootstrap/dist/js')); // redirect bootstrap JS
app.use('/js', express.static(__dirname + '/node_modules/jquery/dist')); // redirect JS jQuery
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css')); // redirect CSS bootstrap
app.use(express.static(__dirname+'/public'));

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');



app.set('port',process.env.port || 5001);

app.listen(app.get('port'), ()=>{
    console.log('Server now listening on port: '+app.get('port'));
});