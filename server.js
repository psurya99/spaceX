const express = require('express');
const path= require('path');

const app=express();

app.use (express.static(__dirname +'/dist/XT-App'));
res.sendFile(path.join(__dirname +'/dist/XT-App/index.html'));

//start the app
//app.listen(port, () => console.log(`Example app listening on port ${port}!`))

app.listen(process.env.PORT ||8080);