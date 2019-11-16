const express = require('express')
const parse = require('csv-parse')
const fs = require('fs')
const utils = require('../utils.js')

const router = express.Router()

router.get('/all', (req, res) => {
  const csvData = []
  fs.readFile('data.csv', 'utf8', function (err, data) {
    parse(data, {
      delimiter: ';',
      from_line: 2
    }).on('data', function (csvrow) {
        console.log(csvrow)
        const object = {}
        for (var i = 0; i < utils.headers.length; i++) {
          object[utils.headers[i].name] = utils.parseField(csvrow[i], utils.headers[i].type)
        }
        console.log(object)
        csvData.push(object)
      })
      .on('end', function () {
        //do something wiht csvData
        console.log('done');
        res.send(csvData)
      })
  })
})

module.exports = router
