const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//   console.log(result); // you don't get the docs removed back
// });

// Todo.findOneAndRemove  (works just as findByIdAndRemove)
// Todo.findByIdAndRemove

Todo.findByIdAndRemove('5ae094cb46acd954c54c795d').then((todo) => {
  console.log(todo); // you get the doc back
})
