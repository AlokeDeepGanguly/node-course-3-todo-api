const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require ('./../server/models/user');



// Todo.remove({}).then((result)=>{
//   console.log(result);
// });

//Todo.findOneAndRemove({})


Todo.findByIdAndRemove('5b86dd2c2de51eeb00f66693').then((todo)=>{
  console.log(todo);
});
