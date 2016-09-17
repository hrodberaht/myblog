var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();

var homepage = require('./app_server/client/routes/homepage');
var page404 = require('./app_server/client/routes/page404')

app.set('views', path.join(__dirname, 'app_server/client/views'));
app.set('view engine', 'ejs');



app.use(morgan('dev'));


app.get('/', homepage);


app.use(page404);



app.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0", function(err){
    
    if (err) throw err;
   
    console.log("Serwer start's");
    
});