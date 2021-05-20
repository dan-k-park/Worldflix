const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');
require('./models/User');
require('./services/passport');

mongoose.connect(keys.mongoURI)

const app = express();

app.use(express.json());
app.use(cors());

app.use(
    cookieSession({
        // cookie last for 30 days in milliseconds
        maxAge: 30 * 24 * 60 * 60 * 1000,
        // cookieKey is a random string of letters can be anything
        // put in an array if multiple keys are desired and cookieSession will randomly pick one
        keys: [keys.cookieKey]
    })
);

app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app);
// require('./routes/billingRoutes')(app);


app.get('/', (req, res) => {
    res.send({ bye: 'bud' })
})

const PORT = process.env.PORT || 5000
app.listen(PORT)