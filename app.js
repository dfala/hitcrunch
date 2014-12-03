var express = require('express');
var db = require('./db.js');
var body = require('body-parser');
var app = express();


//MODIFY API ON LINE BELOW WITH THE NAME OF YOUR PROJECT
db.connect('mongodb://localhost:27017/api', function () {
	console.log('connected!');
})

app.use(express.static(__dirname))

var portNum = 3000;

app.use(body.json());

app.listen( portNum, function () {
	console.log('Now serving my master in port: ' + portNum)
} );




//EXAMPLE .GET REPLACE "TOASTS" ON LINE BELOW WITH YOUR OWN PROJECT NAME
// app.get('/toasts', function (req, res) {
// 	db.getAllChats(function (err, chats) {
// 		if(!err)
// 		res.json(chats)
// 	})
// })





//EXAMPLE .POST REPLACE "TOASTS" ON LINE BELOW WITH YOUR OWN PROJECT NAME
// app.post('/toasts', function (req, res) {
// 	var newMessage = req.body;
// 	console.log(newMessage);

// 	db.createNewChat(req.body.user, req.body.content, req.body.userID);
// 	res.json(newMessage);
// })





