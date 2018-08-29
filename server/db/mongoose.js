var mongoose = require('mongoose');

mongoose.Promise=global.Promise;
 if (process.env.port){
   var connStr='mongodb://Aloke:qwerty123@ds235732.mlab.com:35732/node_todo_app_db'
 }else{
   var connStr='mongodb://127.0.0.1:27017/TodoApp'
 }


mongoose.connect(connStr);

module.export={mongoose};
