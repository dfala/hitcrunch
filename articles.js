var Article = require('./models/Article.js');
var Question = require('./models/Question.js');

function createArticle (title, subtext, link, parentId, votes, timestamp) {
	var article = new Article();

	article.title = title;
	article.subtext = subtext;
	article.link = link;
	article.parentId = parentId;
	article.votes = votes;
	article.timestamp = timestamp;

	article.save(function (err, article) {
		if(err) {
			console.log(err);
		}
		else {
			console.log(article);
			Question.findOne({_id: parentId}, function (err, question) {
				question.articles.push(article._id);
				question.save();
			})
		}
	})
};

function upVote (articleId, callback) {
	Article.findOne({ _id: articleId }, function (err, article) {
		article.votes++;
		article.save();
	})
}

function getAllArticles (callback) {
	Article.find({}, callback)
}

module.exports.createArticle = createArticle;
module.exports.upVote = upVote;
module.exports.getAllArticles = getAllArticles;