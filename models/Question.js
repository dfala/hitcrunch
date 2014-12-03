var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var ObjectId = mongoose.Schema.Types.ObjectId;

var questionSchema = new Schema({
	question:  String,
	timestamp: String,
	articles: [{type: ObjectId, ref: 'Article'}]
});

var Question = mongoose.model('Question', questionSchema);

module.exports = Question;