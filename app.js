var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var hbs = require('hbs');
var lessCompiler = require('less-middleware');
var rho = require('rho');
var fs = require('fs');
var request = require('request');
var compression = require('compression');

var routes = require('./routes/index');
var users = require('./routes/users');

var app = express();

// view setup

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.set('view options', { layout: 'layouts/main' });
hbs.registerPartials(path.join(__dirname, 'views/partials'));

hbs.registerHelper('extend', function(name, context) {
  var block = blocks[name];
  if (!block) {
    block = blocks[name] = [];
  }

  block.push(context.fn(this)); // for older versions of handlebars, use block.push(context(this));
});

hbs.registerHelper('block', function(name) {
  var val = (blocks[name] || []).join('\n');

  // clear the block
  blocks[name] = [];
  return val;
});

hbs.registerHelper('markdown', function(fileName) {
  fileName += ".md";
  var contents = fs.readFileSync('views/markdown/'+fileName).toString();
  var template = hbs.compile(contents);
  var output = template(this);
  var html = rho.toHtml(output);

  //make section
  html = html.replace(/#section#/g, '<section class="layout-section layout-section-white">');
  html = html.replace(/#\/section#/g, '</section>');

  return html;
});

// var ghost = require('ghost');
// var parentApp = app;
//
// ghost().then(function (ghostServer) {
//   parentApp.use("/blog", ghostServer.rootApp);
//
//   ghostServer.start(parentApp);
// });


// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(compression());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(lessCompiler(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));


app.use(function (req, res, next) {
      res.setHeader("Cache-Control", "public, max-age=1209600");
      res.setHeader("Expires", new Date(Date.now() + 1209600000).toUTCString());
  next();
});


app.use('/', routes);

app.use(function(req, res, next) {
  if (req.path.substr(-1) == '/' && req.path.length > 1) {
    var query = req.url.slice(req.path.length);
    res.redirect(301, req.path.slice(0, -1) + query);
  } else {
    next();
  }
});



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});



//disable cookies
request.defaults({"jar":false});


module.exports = app;
