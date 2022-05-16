const express = require('express');
const app = express();
app.get('/',(rep,res) =>{
        res.send(`<p>99 Bottles of beer on the wall</p>
                <li><a href="/98">take one down, pass it around</a></li>`)
    })
app.get('/0',(rep,res) =>{
        res.send(`<p>0 Bottles of beer on the wall</p>
                <li><a href="/">Play Again</a></li>`)
})
for(let i = 98; i>0; i--){
    app.get('/:i',(rep,res) =>{
        res.send(`<p>${rep.params.i} Bottles of beer on the wall</p>
                <li><a href="/${rep.params.i-1}">take one down, pass it around</a></li>`) 
    }) 
}  
app.listen(3000,() => {
    console.log('opening web in localhost:3000')
})