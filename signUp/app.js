const mongoose = require('mongoose')
const express = require('express')
const app = express()

const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const cors = require('cors')
require('dotenv').config()
//const db = require('./configuration/database.config');

mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}).then(() => {console.log("DB CONNECTED")})
  .catch(() => {console.log("UNABLE TO CONNECT TO DB")})

  app.use(bodyParser.json())
  app.use(cookieParser())
  app.use(cors())

  const userRoutes = require('./routes/userRoutes')

  app.use('/api', userRoutes)

  const port = process.env.PORT || 8000

  app.listen(port, () => {
      console.log(`App Is Running At ${port}`)
  })