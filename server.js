const express = require('express');
const path= require('path');

const app=express();

app.use (express.static(_dirname +'/dist/XT-App'));

app.get('/*',function (req,res){
    res.sendFile(path.join(_dirname +'/dist/XT-App/index.html'));
});


//start the app
app.listen(process.env.PORT ||8080);