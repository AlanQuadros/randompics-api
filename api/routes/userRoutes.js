'use strict';
module.exports = function(app) {
  var userList = require('../controllers/userController' );

  // todoList Routes
  app.route('/users')
    .get(userList.list_all_users)
    .post(userList.create_a_user);

  app.route('/foto')
    .get()
    .post(userList.mandaFoto);

  app.route('/login')
      .post(userList.login);

//   app.route('/tasks/:taskId')
//     .get(todoList.read_a_task)
//     .put(todoList.update_a_task)
//     .delete(todoList.delete_a_task);
};