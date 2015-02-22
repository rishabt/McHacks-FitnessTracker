var express = require('express');
var twilio = require('twilio');
//var router = express.Router();
var app=express();
//var bodyParser = require('body-parser');
//app.use(bodyParser.json());
//app.use(bodyParser.urlencoded());

/* GET home page. */
app.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

/*router.get('/party',function(req,res,next){
   var party_name = req.body.party;
   req.session.party = party_name;
   res.render('test',{title:req.session.id});
});*/

app.post('/party',function(req,res){
	var number = req.body.phone;
	console.log(req.body);
	var text = req.body.sms_text;
	if(req.body.sms_text){
		text = req.body.sms_text; 
		req.session.sms_text = req.body.sms_text;
	}
	//console.log(req.body);
	res.render('test',{title:number+"  "+text});
	//res.send(number);
});

module.exports = app;
