/* jshint esversion: 6 */
const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
// 	console.log(result);
// });

// Todo.findOneAndRemove
// Todo.findByIdAndRemove

Todo.findOneAndRemove({_id: '59711aa86609bad6cdf5a4ae'}).then((todo) => {
	console.log(todo);
});

Todo.findByIdAndRemove('59711aa86609bad6cdf5a4ae').then((todo) => {
	console.log(todo);
});



