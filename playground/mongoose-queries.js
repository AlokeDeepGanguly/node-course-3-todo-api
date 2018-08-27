const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require ('./../server/models/user');

// var id = '5b843333b3e9176c34c2d6871'
//
// if(!ObjectID.isValid(id)){
//   console.log('ID not Valid');
// }

// Todo.find({_id: id}).then((todos)=>{
//   console.log('Todos: ', todos);
// });
//
// Todo.findOne({_id: id}).then((todo)=>{
//   console.log('Todo: ', todo);
// });

// Todo.findById(id).then((todo)=>{
//   if(!todo){
//     return console.log('ID not Found');
//   }
//   console.log('Todo By ID ', todo);
// },(err)=>{
//   console.log(err);
// });

var userID = '5b843f1f3e36100b4ffec544';

User.findById(userID).then((user)=>{
  if (!user){
     return console.log('User ID not Found');
  }
  console.log('User : ',user);
},(err)=>{
  console.log(err);
});
