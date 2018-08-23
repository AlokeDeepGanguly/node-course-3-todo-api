//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp',{ useNewUrlParser: true }, (err,client)=>{
  if(err){
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connnected to MongoDB server');
  const db = client.db('TodoApp');

db.collection('Todos').findOneAndUpdate({
  _id: new ObjectID('5b7e92f4e3bc0cf79cca2698')
}, {
  $set:{
    completed:true
  }
}, {
  returnOriginal: false
}).then((result)=>
{
  console.log(result);
})

db.collection('Users').findOneAndUpdate({
  _id: new ObjectID('5b7d4dd5de2e8301000554c1')
},{
  $set:{name: 'Rohan Banerjee'},
  $inc:{Age:1}
},{
  returnOriginal: false
}).then((result) =>{
  console.log(result);
})

  //client.close();
});
