//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp',{ useNewUrlParser: true }, (err,client)=>{
  if(err){
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connnected to MongoDB server');
  const db = client.db('TodoApp');

  //deleteMany
  // db.collection('Todos').deleteMany({text: 'Eat Lunch'}).then((result) =>{
  //   console.log(result);
  // }, (error)=>{
  //   console.log('Unable to delete Todos',error);
  // });

  //deleteOne
  // db.collection('Todos').deleteOne({text: 'Eat Lunch'}).then((result) =>{
  //   console.log(result);
  // }, (error)=>{
  //   console.log('Unable to delete Todos',error);
  // });

  //findOneAndDelete
  // db.collection('Todos').findOneAndDelete({completed:false}).then((result)=>{
  //   console.log(result.value);
  // })

 //deleteMany-Users
 // db.collection('Users').deleteMany({name:'Varun'}).then((result)=>{
 //   console.log(result);
 // },(error)=>{
 //    console.log('Unable to delete Todos',error);
 // });

 //findOneAndDelete
 db.collection('Users').findOneAndDelete({_id: new ObjectID('5b7e9c97e3bc0cf79cca2b9a')}).then((result)=>{
    console.log(result.value);
 },(error)=>{
   console.log('Unable to delete user');
 })

  //client.close();
});
