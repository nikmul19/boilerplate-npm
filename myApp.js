
var express = require('express');
var app = express();
console.log("hello world");

app.use(express.static(__dirname+'/public'));
app.use(function(req,res,next){
  console.log(req.method+" "+req.path+" - "+req.ip);
  next();
  
});

app.get('/now',function(req,res,next){
  var time=new Date().toString();
  req.time=time;
  next();
  
},
        function(req,res){
  res.json({"time":req.time})
});


app.get('/:word/echo',function(req,res){
  
  res.json({"echo":req.params.word});
});

app.route('/name').get(function(req,res){
  
  var json={"name":req.query.first+" "+req.query.last};
  res.json(json);
});


app.get('/',function(req,res){
  
  
  res.sendFile(__dirname+ "/views/index.html");
  
  //express.static(__dirname+'/public');
  
});


app.get('/json',function(req,res){
  
  var jsonObj={"message":"Hello json"};
  if(process.env.MESSAGE_STYLE=="uppercase"){
    jsonObj.message="HELLO JSON";
  }
  res.json(jsonObj);
  
});

app.get('/',function(req,res){
  res.send('Hello Express');
});
// --> 7)  Mount the Logger middleware here


// --> 11)  Mount the body-parser middleware  here


/** 1) Meet the node console. */


/** 2) A first working Express Server */


/** 3) Serve an HTML file */


/** 4) Serve static assets  */


/** 5) serve JSON on a specific route */


/** 6) Use the .env file to configure the app */
 
 
/** 7) Root-level Middleware - A logger */
//  place it before all the routes !


/** 8) Chaining middleware. A Time server */


/** 9)  Get input from client - Route parameters */


/** 10) Get input from client - Query parameters */
// /name?first=<firstname>&last=<lastname>

  
/** 11) Get ready for POST Requests - the `body-parser` */
// place it before all the routes !


/** 12) Get data form POST  */



// This would be part of the basic setup of an Express app
// but to allow FCC to run tests, the server is already active
/** app.listen(process.env.PORT || 3000 ); */

//---------- DO NOT EDIT BELOW THIS LINE --------------------

 module.exports = app;
