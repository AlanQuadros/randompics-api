var express = require('express')
var cors = require('cors')

app = express(),
app.use(cors())
port = process.env.PORT || 3000;

mongoose = require('mongoose')
User = require('./api/models/userModel')
bodyParser = require('body-parser')

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://alan:senha1@ds125831.mlab.com:25831/randomics'); 


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var routes = require('./api/routes/userRoutes');
routes(app);


app.listen(port);

console.log('listening to port: ' + port);
