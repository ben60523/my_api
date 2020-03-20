'use-strict'

module.exports = function (app) {
    var controller = require('../controller/controller')

    app.route('/people')
        .get(controller.list_all_people)
        .post(controller.create_a_person)

    app.route('/people/:personId')
        .get(controller.read_a_person)
        .put(controller.update_a_person)
        .delete(controller.kill_a_person)
}