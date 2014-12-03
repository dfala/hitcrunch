var Question = require('./models/Question.js');
var Article = require('./models/Article.js');

function createQuestion (incomingQuestion, timestamp) {
	var question = new Question();

	question.question = incomingQuestion;
	question.timestamp = timestamp;

	question.save(function (err, hit) {
		if(err) {
			console.log(err);
		}
		else {
			console.log(hit);
		}
	})
}

function getAllQuestions (callback) {
	Question.find({})
	.populate('articles')
	.exec(callback);
}

module.exports.createQuestion = createQuestion;
module.exports.getAllQuestions = getAllQuestions;