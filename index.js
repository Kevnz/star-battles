var http = require('http'),
    director = require('director');
var index = require('./routes/home');
var noRoute = require('./routes/static-files'); 
var router = new director.http.Router({
    '/': {
      get: index
    }
}).configure({ notfound: noRoute} );


var server = http.createServer(function (req, res) {
    router.dispatch(req, res, function (err) {
        if (err) {
            res.writeHead(404);
            res.end();
        }
    });
});

  //
  // You can also do ad-hoc routing, similar to `journey` or `express`.
  // This can be done with a string or a regexp.
  //
  //router.get('/bonjour', helloWorld);
  //router.get(/hola/, helloWorld);

  //
  // set the server to listen on port `8080`.
  //
  server.listen(process.env.PORT || 4567);