//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');



MongoClient.connect('mongodb://127.0.0.1:27017/TodoApp',{ useNewUrlParser: true }, (err,client)=>{
  if(err){
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connnected to MongoDB server');
  const db = client.db('TodoApp');

  // db.collection('Todos').insertOne({
  //   text:'something to do',
  //   completed: false
  // },(err,result)=>{
  //   if (err){
  //   return console.log('Unable to insert Todo',err);
  // }
  // console.log(JSON.stringify(result.ops,undefined,2));
  // })
  //
  // db.collection('Users').insertOne({
  //   name:'Aloke Deep',
  //   Age:25,
  //   location:'Bangalore'
  // },(err,result) =>{
  //   if(err){
  //     return console.log('Unable to add user');
  //   }
  //   console.log(result.ops[0]._id.getTimestamp());
  // })

  client.close();
});
