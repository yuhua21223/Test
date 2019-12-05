const express = require('express');
const app = express();
const http = require('http');
const fs = require('fs');

const mysql = require('mysql');
const db = mysql.createConnection({
	host: 'localhost',
	user: 'lliang77',
	password: 'tempPass',
	database: 'termproj_db'
});

// db.connect();
// app.get('/users', (req, res) => {
// 	const sql = 'SELECT * FROM users';

// 	db.query(sql, (err, result) => {
// 		if(err) throw err;
// 		res.send(result);
// 	});
// });

db.connect(function(err){
app.get('/adduser', (req, res) => {
	if (err) throw err;
	console.log("Connected!");
	var sql = "INSERT INTO users (username, email, password) VALUES ('JDOE', 'JD@MAIL.COM', 'PWORD')";
	
	db.query(sql, function (err, result){
		if(err) throw err;
		console.log("1 record inserted");
		res.json({username: 'jdoe', password: 'tempPass', email: 'jdoe@mail.com'});
		res.end();
		});
	});
});

// db.connect();
// app.get('/users', (req, res) => {
// 	var obj = {username: 'jdoe', password: 'tempPass', email: 'jdoe@mail.com'};

// 	db.query(obj, (err, result) => {
// 		if(err) throw err;
// 		res.JSON(obj);

// 	});
// });

app.set('view engine', 'ejs');
app.use('/css', express.static('css'));
app.use('/js', express.static('js'));

app.get('/login', function(req, res){
	fs.readFile('html/login.html', 'utf8', function(err, data) {
	    res.writeHead(200, {'Content-Type': 'text/html'});
	    res.write(data); //write a response to the client
	    console.log(data);
	    res.end(); //end the response
	  });
});

app.get('/registration', function(req, res){
	fs.readFile('html/registration2.html', 'utf8', function(err, data) {
	    res.writeHead(200, {'Content-Type': 'text/html'});
	    res.write(data); //write a response to the client
	    console.log(data);
	    res.end(); //end the response
	  });
});

app.post('/registration', function(req, res){
	fs.writeFile('writeFile/newFile.txt', obj = {username:"username", email:"email"}, function (err){
    	if (err) throw err;
    	console.log('wrote other content to newFile');
    	res.end();
  		});
	// fs.readFile('public/index_welcometoexpress.html', 'utf8', function(err, data) {
	//     res.writeHead(200, {'Content-Type': 'text/html'});
	//     res.write(data); //write a response to the client
	//     console.log(data);
	//     res.end(); //end the response
	//   });
})

app.get('/postimage', function(req, res){
	fs.readFile('html/postimage.html', 'utf8', function(err, data) {
	    res.writeHead(200, {'Content-Type': 'text/html'});
	    res.write(data); //write a response to the client
	    console.log(data);
	    res.end(); //end the response
	  });
});

app.listen(8080);
	console.log('Server is running on 8080...')