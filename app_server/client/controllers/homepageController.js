module.exports = function(req, res){
    
    
    var dane = {thumbail1: 'Magia i Miecz',
        desc1: 'super board game',
        thumbail2: 'Gra o Tron'
    };
    
    res.render("homepage", dane);
    
};