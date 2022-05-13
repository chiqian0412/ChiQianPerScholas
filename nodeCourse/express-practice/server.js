const express = require('express')
const app = express();
app.set('view engine', 'ejs')
app.get('/',(req,res)=>{
//     res.send(['user','class']);
        res.render('index')
})
// app.post('/',(req,res)=>{
//     res.send('Post request');
// })
app.get('/user',(req,res)=>{
    res.render('about')
})
// app.post('/user',(req,res)=>{
//     res.send('Post request again');
// })
// app.get('/class',(req,res)=>{
//     res.send({class:'software', time:'15 weeks'});   
// })
app.get('/:indexOfPlantsArray', (req, res) => {
    res.send(plants[req.params.indexOfPlantsArray]);
});


app.listen(3000, function(){
    console.log('website link ports is 3000');
});
