const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const google = require('./api/keys');
const app = express();
const path = require('path');
const staticPath = path.join(__dirname, 'public');
const db = require('./api/queries');
const port = 3001;

passport.use(new GoogleStrategy({
  clientID: google.clientID,
  clientSecret: google.clientSecret,
  callbackURL: 'http://localhost:3000/auth/google/callback'
}, (accessToken, refreshToken, profile, done) => {
  User.findOrCreate({ googleID: profile.id }, (err, user) => {
    return done(err, user);
  })
}));
app.use(express.static(staticPath));
app.use(express.json());

app.get('/', (req, res) => {
  console.log(staticPath);
});

app.get('/auth/google', passport.authenticate('google', { scope: ['https://www.googleapis.com/auth/plus.login'] }, (req, res) => console.log('i ran')));
app.get('/auth/google/callback', passport.authenticate('google', { failureRedirect: '/login' }), db.googleAuthFail);
app.get('/api/users', db.getUsers);
app.get('/api/users/:id', db.getUserById);
app.post('/api/users', db.createUser);
app.put('/api/users/:id', db.updateUser);
app.delete('/api/users/:id', db.deleteUser);

app.listen(port, () => console.log(`Listening on port ${port}`));
