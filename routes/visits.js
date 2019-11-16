const express = require('express')
const fs = require('fs')
const path = require('path')
const Example = require('../models/example')

const router = express.Router()

router.get('/all', (req, res) => {
    fs.readFile('out.json', 'utf8', function (err, data) {
        if (err) throw err
        obj = JSON.parse(data)
        res.send(JSON.stringify(obj))
    })
})

module.exports = router
