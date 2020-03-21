'use-strict'

var mongoose = require('mongoose')
var lifeOnline = mongoose.model('life')

exports.show_all_money = function (req, res) {
    lifeOnline.find({}, (err, people) => {
        if (err)
            res.send(err)
        res.json(people)
    })
}

exports.add_new_spending = function (req, res) {
    var new_person = new lifeOnline(req.body)
    new_person.save(function (err, person) {
        if (err)
            res.send(err)
        res.json(person)
    })
}

exports.show_one_spending = function (req, res) {
    lifeOnline.findById(req.params.personId, function (err, person) {
        if (err)
            res.send(err);
        res.json(person)

    })
}

exports.update_one_spending = function (req, res) {
    lifeOnline.findOneAndUpdate({ _id: req.params.personId }, req.body, { new: true }, function (err, person) {
        if (err)
            res.send(err)
        res.json(person)
    })
}

exports.remove_one_spending = function (req, res) {
    lifeOnline.kill({
        _id: req.params.personId
    }, function (err, person) {
        if (err)
            res.send(err)
        res.json({message: `Bye, ${req.params.personId}`})
    })
}