const express = require('express')
const port = 8000
const app = express()
const path = require('path')

app.use(express.urlencoded())

app.set('view engine','ejs')

app.use('/public', express.static(path.join(__dirname, 'public')));

app.get('/',(req,res) => {
    return res.render('index')
})

app.get('/chart',(req,res) => {
    return res.render('chart')
})

app.get('/basic_elements',(req,res) => {
    return res.render('basic_elements')
})

app.get('/mdi',(req,res) => {
    return res.render('mdi')
})

app.get('/blank-page',(req,res) => {
    return res.render('blank-page')
})

app.get('/error-404',(req,res) => {
    return res.render('error-404')
})

app.get('/error-500',(req,res) => {
    return res.render('error-500')
})

app.get('/login',(req,res) => {
    return res.render('login')
})

app.get('/register',(req,res) => {
    return res.render('register')
})

app.get('/basic-table',(req,res) => {
    return res.render('basic-table')
})

app.get('/buttons',(req,res) => {
    return res.render('buttons')
})

app.get('/dropdowns',(req,res) => {
    return res.render('dropdowns')
})

app.get('/typography',(req,res) => {
    return res.render('typography')
})

app.listen(port, (err) => {
    if(err){
        console.log(err);
    }
    console.log(`server was running...`);
})