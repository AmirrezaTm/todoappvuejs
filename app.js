require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const morgan = require('morgan')
const routerBook = require('./routes/routeWorkout')
const routeUser = require('./routes/routeUser')

app.use(express.json())
mongoose.set('strictQuery', false);
app.use(morgan('dev'))

app.use(cors())

app.use((req, res, next) => {
  console.log('host name:', req.hostname);
  console.log('path localhost:' + req.path);
  next()
})

app.use('/api/', routerBook)
app.use('/api/', routeUser)

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('connected to database')
    // listen to port
    app.listen(process.env.PORT, () => {
      console.log('listening for requests on port', process.env.PORT)
    })
  })
  .catch((err) => {
    console.log(err)
  })

