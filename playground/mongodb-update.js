const {MongoClient, ObjectID} = require('mongodb');//const MongoClient = require('mongodb').MongoClient;


var user = {name: 'Ignacio', age: 20};
var {name} = user; //object destructuring example


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');
  const db = client.db('TodoApp');

  // db.collection('Todos').findOneAndUpdate({
    // _id: new ObjectID('5ad0f0de46acd90dd528a1b1')
  // }, {
    // // $set: {
    //   completed: true
    // }
  // }, {
    // returnOriginal: false
  // }).then((result) => {
    // console.log(result);
  // });

  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('5ad0e254da99a212138434ed')
  }, {
    $set: {
      name: 'Ignacio'
    },
    $inc: {
      age: 1
    }
  }, {
    returnOriginal: false
  }).then((result) => {
    console.log(result);
  })


  //client.close();
});
