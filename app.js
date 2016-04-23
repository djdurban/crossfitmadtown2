var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var hbs = require('hbs');
var jade = require('jade');
var lessCompiler = require('less-middleware');
var cons = require('consolidate');

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

hbs.registerHelper('freeblog', function(context) {
  var output = context.fn(this);

  //make 5 hash tags h5
  output = output.replace(/####(.*)?/g, '<h5>$1</h5>');

  //make 4 hash tags h4
  output = output.replace(/####(.*)?/g, '<h4>$1</h4>');

  //make 3 hash tags h3
  output = output.replace(/###(.*)?/g, '<h3>$1</h3>');

  //make stars bold
  output = output.replace(/\*\*(.*)?\*\*/g, '<strong>$1</strong>');

  //make 4 dashes hr
  output = output.replace(/----/g, '<hr />');

  //make line breaks html breaks
  //output = output.replace(/^(\r\n?|\n){1}(.*)?/g, '$1');
  //output = output.replace(/(\r\n?|\n)(.+)?(\r\n?|\n)/g, '<p>$1</p>');
  output = output.replace(/(.+)?(\r\n?|\n)/g, '<p>$1</p>');


  return output;
});

//cons.require.handlebars = hbs;
//cons.require.jade = jade;

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(lessCompiler(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/users', users);

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


module.exports = app;
