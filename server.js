const express = require('express');
const app = express();

const port = process.env.PORT || 3000;
app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/public/views'));

app.get('/', function(req, res){
    res.render('pages/index');
});

app.listen(port, function(err){
    if(err){
        console.log(err);
    }else{
        console.log("App is running on port: ", port);
    }
});