const express = require('express');
const app = express();

const port = process.env.PORT || 3000;
app.set('view engine', 'ejs');

app.use('/public', express.static(__dirname + '/public'));

app.use('/', require('./public/src/routes'));

app.get('/', function(req, res){
    res.redirect('/cesar');
});

app.listen(port, function(err){
    if(err){
        console.log(err);
    }else{
        console.log("App is running on port: ", port);
    }
});