var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var routerInfo = require('./app/router/main');
var consolidate = require('consolidate');
//var configuration = require('./app/configuration/appinformation');

var app = express();

//Create configuration file for all information
/*app.locals.title = configuration.appinformation.title;
app.locals.description = configuration.appinformation.description;*/

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static(path.join(__dirname, 'public')));
app.use(routerInfo);

app.set('views', path.join(__dirname, 'app/views'));
app.engine('html', consolidate.swig);
app.set('view engine', 'html');
app.set('port', process.env.PORT || 3000);

app.listen(app.get('port'), function() {
  console.log('Server started, ready on port: ' + app.get('port'));
});
