const {MongoClient, ObjectID} = require('mongodb');//const MongoClient = require('mongodb').MongoClient;


var user = {name: 'Ignacio', age: 20};
var {name} = user; //object destructuring example


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');
  const db = client.db('TodoApp');

  // How to use toArray
  // db.collection('Todos').find({
  //   _id: new ObjectID('5ad0f0de46acd90dd528a1b1')
  // }).toArray().then((docs) => {
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //   console.log('Unable to fetch Todos', err);
  // });

  // How to use count and find using ObjectID
  // db.collection('Todos').find({
    // _id: new ObjectID('5ad0f0de46acd90dd528a1b1')
  // }).count().then((count) => {
    // console.log(`Todos count: ${count}`);
  // }, (err) => {
    // console.log('Unable to fetch Todos', err);
  // });

  db.collection('Users').find({name: 'Ignacio'}).toArray().then((docs) => {
    console.log(JSON.stringify(docs, undefined, 2));
    console.log(`-------------------------------------\n${docs.length}`)
  }, (err) => {
    console.log('Unable to fetch Todos', err);
  });
  //client.close();
});
