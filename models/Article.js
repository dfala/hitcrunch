var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var ObjectId = mongoose.Schema.Types.ObjectId;

var articleSchema = new Schema({
	title:  String,
	subtext: String,
	link: String,
	parentId: {type: ObjectId, ref: 'Question'},
	votes: Number,
	timestamp: String
});

var Article = mongoose.model('Article', articleSchema);

module.exports = Article;