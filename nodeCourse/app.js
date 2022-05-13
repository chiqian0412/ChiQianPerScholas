// const fs = require('fs')
// person="chi"
// function add(){

// }

// fs.writeFile('./nameOfFile.txt','demo',function(){
//     console.log("Seperate File Created")
// })
const express = require('express')
const app = express();

app.get('/',(req,res)=>{
    res.send('<h1>Hello World</h1>');
})
app.listen(3000, function(){
    console.log('Listening on port 3000');
});