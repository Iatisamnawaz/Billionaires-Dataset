// The index.js file of your application
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mysql = require('mysql2');
const port = 3000;
const db = mysql.createConnection({
	host: '127.0.0.1',
	user: 'root',
	password: 'new_password',
	database: 'billionaire'
});

// connect to database
db.connect((err) => {
	if (err) {
		throw err;
	}
	console.log('Connected to database');
});

global.db = db;
app.use(bodyParser.urlencoded({ extended: true }));
require('./routes/user')(app);
app.set('views', __dirname + '/views');
app.use(express.static('/public'));
app.use(express.static(__dirname + '/node_modules/bootstrap/dist'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
