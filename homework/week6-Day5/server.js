const express = require('express');
const app = express();

const names = ['sara','mike','miya','chi']
const answers = ["It is certain", "It is decidedly so", 
            "Without a doubt", "Yes definitely",
            "You may rely on it", "As I see it yes",
             "Most likely", "Outlook good","Yes", 
             "Signs point to yes", "Reply hazy try again",
              "Ask again later","Better not tell you now", 
              "Cannot predict now", "Concentrate and ask again",
              "Don't count on it", "My reply is no",
               "My sources say no","Outlook not so good",
                "Very doubtful"]
app.get('/greeting',(req,res) => {
    res.send('Hello, stranger.')
})
app.get('/greeting/:name',(req,res) => {
    res.send("what's up, "+ req.params.name)
})
app.get('/tip/:total/:tipPercentage',(req,res) => {
    
    const tips = (parseFloat(req.params.total)*parseFloat(req.params.tipPercentage)*0.01).toString();
    res.send(tips)
})
app.get('/magic/Will%20I%20Be%20A%20Millionaire',(req,res) => {
    res.send(answers[Math.floor(Math.random()*answers.length)])
})

app.listen(3000,() => {
    console.log('opening web in localhost:3000')
})