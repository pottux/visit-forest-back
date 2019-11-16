const mongoose = require('mongoose')

const Route = mongoose.model('route', new mongoose.Schema({
    name: String,
    length: Number,
    time: Number,
    level: String,
    coordNorth: String,
    coordEast: String,
    winter: Boolean,
    options: [String]
}))

module.exports = Route
