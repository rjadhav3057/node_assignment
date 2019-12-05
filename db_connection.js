var express = require('express');
var bodyParser = require('body-parser');
var mysql = require('mysql');
var cors = require('cors')
var app = express();

app.use(cors());
app.use( bodyParser.json() );       
app.use(bodyParser.urlencoded({     
  extended: true
}));


app.listen(3000);

var con = mysql.createConnection ({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'studentdetails'
});

con.connect(function(err) {
    if (err) throw err;
    con.query("SELECT * FROM stud", function (err, result, fields) {
    if (err) throw err;
    });
 });

 app.get('/student', function (req, res) {
    con.query('select * from stud', function (error, results) {
       if (error) throw error;
       res.end(JSON.stringify(results));
     });
 });

 app.post('/student/save', function (req, res) {
    var postData = req.body;
    console.log(postData);
    con.query("INSERT INTO stud (`fname`,`lname`) VALUES ('"+postData.fname+"','"+postData.lname+"');", 
    postData, function (error, results, fields) {
      if (error) throw error;
      res.end(JSON.stringify(results));
    });
  });

 app.get('/student1', function (req, res) {
  var id = req.param('id');
  con.query('select * from stud where id=?',[id], function (error, results,) {
     if (error) throw error;
     res.end(JSON.stringify(results));
     console.log(results);
   });
});

