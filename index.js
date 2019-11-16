const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const morgan = require('morgan')
const cors = require('cors')
const dotenv = require('dotenv')

if (process.env.NODE_ENV !== 'production') {
    dotenv.config()
    app.use(morgan(':method :url :status :res[content-length] - :response-time ms'))
}

const connection = require('./connection')
connection.connect()

const visits = require('./routes/visits')
const geoFiles = require('./routes/geoFiles')
const routes = require('./routes/routes')

app.use(cors())
app.use(bodyParser.json())

app.use('/api/visits', visits)
app.use('/api/geo', geoFiles)
app.use('/api/routes', routes)

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})

app.use((req, res, next, err) => {
    console.log(err)
})
