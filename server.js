var express = require("express");


var app = express();


app.get("/", function(req, res){
    
    res.send("<h1>Hej</h1>");
    
});



app.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0", function(err){
    
    if (err) throw err;
   
    console.log("Serwer start's");
    
});