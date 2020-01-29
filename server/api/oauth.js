const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const google = require('./keys');

passport.use(new GoogleStrategy({
  clientID: google.clientID,
  clientSecret: google.clientSecret,
  callbackURL: 'http://localhost:3000/auth/google/callback'
}, (accessToken, refreshToken, profile, done) => {
  User.findOrCreate({ googleID: profile.id }, (err, user) => {
    return done(err, user);
  })
}));
