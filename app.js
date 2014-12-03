// INCLUDE MODULES
var express = require('express');
var body = require('body-parser');
var mongoose = require('mongoose');

//LOAD OUR CODE
var questions = require('./questions');
var articles = require('./articles');


//START RUNNING
var app = express();

mongoose.connect('mongodb://localhost:27017/hitcrunch');

app.use(express.static(__dirname + '/public'))
app.use(body.json());


// SETTING UP THE SERVER
var portNum = 3000;

app.listen( portNum, function () {
	console.log('Now rendering you honors in port: ' + portNum)
} );



//QUESTIONS
app.post('/questions', function (req, res) {
	var newQuestion = req.body
	console.log('post the reqbody on app.js',newQuestion);


	questions.createQuestion(newQuestion.question, newQuestion.timestamp);
	res.json(newQuestion);
});

app.get('/questions', function (req, res) {
	questions.getAllQuestions(function (err, allQuestions) {
		if(!err)
		res.json(allQuestions);
	})
});


//ARTICLES
app.post('/articles', function (req, res) {
	var newArticle = req.body;

	articles.createArticle(newArticle.title, newArticle.subtext, newArticle.link, newArticle.parentId, newArticle.votes, newArticle.timestamp)
	res.json(newArticle);
});


app.put('/articles', function (req, res) {
	articles.upVote(req.body._id);
	console.log(req.body);
});

app.get('/articles', function (req, res) {
	articles.getAllArticles(function (err, allArticles) {
		if(!err)
		res.json(allArticles);
	})
})






// app.get('/questions/:slug', function (req, res) {
// 	var questionSlug = req.params.slug;

// 	Question.find({slug: questionSlug}, function (err, question) {

// 	});

// 	res.end("You want to see question " + questionSlug + "!");


// });

// app.put('/questions/:id', function (req, res) {
// 	var questionId = req.params.id;

// 	//Edit a particular question
// });


