'use-strict'

var mongoose = require('mongoose')
var Schema = mongoose.Schema

var lifeSchema = new Schema({
    name: {
        type: String,
        required: 'Gimme ur fucking name!!'
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    income: {
        type: Boolean,
        required: 'Don\'t be an asshole, Ok?'
    },
    type: {
        type: String,
        enum: ["eating", "drinking", "traffic", "coffe", "tobacco", "entertainment", "Daily_Commodities", "Phone", "Computer"],
        required: 'Idiot!!'
    },
    amount: {
        type: Number,
        required: "Tell me how much you mutherfuker!"
    },
    detaile: {
        type:String
    }

})

module.exports = mongoose.model('life', lifeSchema)