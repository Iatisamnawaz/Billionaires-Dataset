

module.exports = function(app) {
	app.get('/', function(req,res) {
		res.render('index.html')
	});

	app.get('/country', function(req, res) {
		let sqlquery = 'SELECT * FROM citizenship';
		// execute sql query
		db.query(sqlquery, function(err, result) {
			if (err) {
				console.log(err)
			} else {
				res.render('country', { action: 'list', citizenship: result });
			}
	});
	});

	app.get('/company', function(req, res) {
		let sqlquery = 'SELECT * FROM company';
		// execute sql query
		db.query(sqlquery, function(err, result) {
			if (err) {
				console.log(err)
			} else {
				res.render('company', { action: 'list', company: result });
			}
	});
	});

	app.get('/person', function(req, res) {
		let sqlquery = 'SELECT * FROM person';
		// execute sql query
		db.query(sqlquery, function(err, result) {
			if (err) {
				console.log(err)
			} else {
				res.render('person', { action: 'list', person: result });
			}
	});
	});

	app.get('/year', function(req, res) {
		let sqlquery = 'SELECT * FROM year';
		// execute sql query
		db.query(sqlquery, function(err, result) {
			if (err) {
				console.log(err)
			} else {
				res.render('year', { action: 'list', year: result });
			}
	});
	});

}

/* -------------------------------------------------------------- */

