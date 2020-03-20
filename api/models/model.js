'use-strict'

var mongoose = require('mongoose')
var Schema = mongoose.Schema

var lifeSchema = new Schema({
    name: {
        type: String,
        required: 'Gimme ur fucking name!!'
    },
    CreatedAt: {
        type: Date,
        default: Date.now
    },
    status: {
        type: [{
            type: String,
            enum: ['poor', 'vary poor', 'Mayor Han']
        }],
        default: 'Mayor Han'
    }
})

module.exports = mongoose.model('life', lifeSchema)