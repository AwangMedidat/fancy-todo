if(process.env.NODE_ENV !== "production"){
    require('dotenv').config()
}

const express = require('express')
const app = express()
const cors = require('cors')
const port = 3000

const router = require('./routes/index')
const errorHandler = require('./middleware/errorHandler')

app.use(cors())
app.use(express.urlencoded({extended : false}))
app.use(express.json())
app.use(router)

app.use(errorHandler)

app.listen(port,()=>{ console.log(`App Running on Port ${port}`) })