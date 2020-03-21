'use-strict'

module.exports = function (app) {
    var controller = require('../controller/controller')

    app.route('/money')
        .get(controller.show_all_money)
        .post(controller.add_new_spending)

    app.route('/money/:spendingId')
        .get(controller.show_one_spending)
        .put(controller.update_one_spending)
        .delete(controller.remove_one_spending)
}