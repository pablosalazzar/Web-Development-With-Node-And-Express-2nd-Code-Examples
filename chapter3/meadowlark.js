const express = require('express')
const { engine } = require('express-handlebars')

const app = express()

//Configure handlebar view engine 
app.engine('handlebars',engine())
app.set('view engine','handlebars')
app.set('views','./views')

// Configure static files and views
app.use(express.static(__dirname + '/public'));

const port = process.env.PORT || 3000

app.get('/',(req,res)=>{
    res.render('home')
})

app.get('/about',(req,res)=>{
    const fortunes = [
        'first fortune',
        'second fortune',
        'third fortune',
    ]
    res.render('about',{fortunes:fortunes})
})

// custom 404 page
app.use((req,res)=>{
    res.status(404)
    res.render('404')
})

// custom 500 page
app.use((err,req,res,nexst)=>{
    console.error(err.message)
    res.status(500)
    res.render('500')
})

app.listen(port,()=> console.log(`server listen on port ${port}`))
