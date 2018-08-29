var mongoose = require('mongoose');

mongoose.Promise=global.Promise;
mongoose.connect('mongodb://<Aloke>:<qwerty123>@ds235732.mlab.com:35732/node_todo_app_db');

module.export={mongoose};
