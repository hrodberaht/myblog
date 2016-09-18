var express = require('express');
var morgan = require('morgan');
var path = require('path');
require('./app_server/client/models/db');

var app = express();

app.use('/public',express.static(path.join(__dirname, '/public')));
app.set('views', path.join(__dirname, 'app_server/client/views'));
app.set('view engine', 'ejs');


var homepage = require('./app_server/client/routes/homepage');
var page404 = require('./app_server/client/routes/page404');
var about = require('./app_server/client/routes/about');




app.use(morgan('dev'));


app.get('/', homepage);
app.get('/about', about);


app.use(page404);



app.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0", function(err){
    
    if (err) throw err;
   
    console.log("Serwer start's");
    
});