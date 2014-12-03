var mongoose = require('mongoose');

module.exports.connect = function (url, callback) {
		mongoose.connect(url);
		mongoose.connection.on('open', callback)
}

//Example CHAT SCHEMA -- CHANGE "CHAT" FOR YOUR OBJECT NAME
// var Schema = mongoose.Schema;
// var chatSchema = new Schema({
// 	user: String,
// 	content: String,
// 	timestamp: Date,
// 	userID: String
// })

// var Chat = mongoose.model('Chat', chatSchema);





//EXAMPLE SAVE POST ON DATABASE

// function createNewChat (user, content, id, callback) {
// 	var chat = new Chat();

// 	chat.user = user;
// 	chat.content = content;
// 	chat.userID = id;
// 	chat.timestamp = new Date();

// 	chat.save(function (err, chat) {
// 		if(err) {
// 			console.log(err);
// 		}
// 		else {
// 			console.log(chat);
// 		}
// 	})
// }






//EXAMPLE GET ALL OBJECTS ON DATABSE
// function getAllChats (callback) {
// 	Chat.find({}, callback);
// }






//EXAMPLE GET ALL OBJECTS WITH A SPECIFIC ID OR SETTING
// function getUsersChats (userId, callback) {
// 	var query = {
// 		"userId": userId
// 	}
// 	Chat.find(query, callback);
// }




//EXAMPLE MODIFY AN OBJECT ON DATABSE
// function updateChat (id, updates, callback) {
// 	var query = {
// 		_id: id
// 	};
// 	Chat.findOne(query, function (err, chat) {
// 		if(err) {
// 			callback(err);
// 		}
// 		else if (!chat) {
// 			callback(new Error('not found'));
// 		}
// 		else {
// 			for(var update in updates) {
// 				chat[update] = updates[update]
// 			}
// 			chat.save(callback);
// 		}
// 	})
// }







//EXAMPLE DELETE OBJECT ON DATABASE
// function deleteChat (id, callback) {
// 	var query = {
// 		_id: id
// 	}
// 	Chat.remove(query, callback)
// }






//EXAMPLE EXPORT MODULE TO MAKE A FUNCTION USABLE ON APP.JS
// module.exports.createNewAccount = createNewAccount;


