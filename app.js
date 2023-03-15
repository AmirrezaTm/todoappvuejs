require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const morgan = require('morgan')
const routeUser = require('./routes/routeUser')

app.use(express.json())
mongoose.set('strictQuery', false);
app.use(morgan('dev'))
app.use(cors());

app.use((req, res, next) => {
  console.log('host name:', req.hostname);
  console.log('path localhost:' + req.path);
  next()
})

app.use('/api/', routeUser)

mongoose.connect("mongodb+srv://amirrezatm86:Amir.11228@cluster0.e3vfz2o.mongodb.net/?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('connected to database')
    // listen to port
    app.listen(5000, () => {
      console.log('listening for requests on port', 5000)
    })
  })
  .catch((err) => {
    console.log(err)
  })