require('dotenv').config()
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const morgan = require('morgan')
const path = require('path')

const boardRouter = require('./routes/board')
const connectDB = require('./config/database')
connectDB()

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use('/comm_modules', express.static(__dirname + '/comm_modules'))

// middleware
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended : false}))

app.use(morgan('dev'))

app.use('/board', boardRouter)

app.get('/', (req, res) => {

    res.render('board')
})

app.get('/show', (req, res) => {

    res.render('show')
})

const PORT = process.env.PORT 

app.listen(PORT, console.log("connected server..."))