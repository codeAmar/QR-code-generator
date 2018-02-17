const express = require('express');
const app = express();
const cookieparser = require('cookie-parser');
const bodyparser = require('body-parser');
const path = require('path');
const session = require('express-session');

app.use(bodyparser.urlencoded({
    extended: false
}));
app.use(bodyparser.json());
app.use(cookieparser());
app.use(session({
    secret: 'butterflies',
    resave: true,
    saveUninitialized: true,
}));

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.static(path.join(__dirname, 'public')));
app.use(require('./routes/index'));
app.use(require('./routes/result'));
app.use(require('./routes/qrcode'));


const server = app.listen(5000, (err) => {
    if (err) {
        console.error(err)
    } else {
        console.log('server started at ', server.address().port);
    }
});

module.exports = app;