var express = require('express');
var mongoose = require('mongoose');
var body_parser = require('body-parser');
var Todo = require('./todo.js');
var Routes = require('./routes.js');
var app = express();

Routes(app);

var PORT = process.env.PORT || 3000 ;



var logger = require('morgan');
// app.use(logger('dev'));
app.use(
    logger('dev'),
    body_parser.json(),
    body_parser.urlencoded({extended: true })
);

app.listen(PORT, () => {
    console.info('server up on port: ', PORT);
});

mongoose.connect('mongodb://localhost/todos', (err)=>{
    if(err){
        console.log("Error: ", err);
    }else{
        console.log("Successfully connected to database!");

    }
});
