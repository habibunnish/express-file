const express=require('express');
const app=express();
const path=require('path');
const port=2002;
var exphbs=require('express-handlebars');


app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');


app.use(express.static(path.join(__dirname,'static')));
app.use('/',require(path.join(__dirname,'router/blog.js')))

app.listen(port,()=>{
    console.log(`Blog app listening on at http://localhost:${port}`);

})