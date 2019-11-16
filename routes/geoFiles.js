const express = require('express')
const fs = require('fs')

const router = express.Router()

router.get('/haukka', (req, res) => {
    fs.readFile('./geo/haukka.json', 'utf8', function (err, data) {
        if (err) throw err
        obj = JSON.parse(data)
        res.send(JSON.stringify(obj))
    })
})

module.exports = router
