const LocalStrategy = require('passport-local').Strategy;
const User = require('./models/User');
const bcrypt = require('bcrypt');

const initialize = (passport) => {
  const authenticatedUser = async (email, password, done) => {
    console.log(email);
    const user = await User.findOne(email);
    if (user == null) {
      return done(null, false, {
        message: 'Nie ma użytkownika z takim e-mailem',
      });
    }

    try {
      const comparePassword = bcrypt.compare(password, user.password);
      if (comparePassword) {
        return done(null, user);
      } else {
        done(null, false, { message: 'Złe hasło' });
      }
    } catch (err) {
      return done(err);
    }
  };
  passport.use(
    new LocalStrategy({ usernameField: 'email' }, authenticatedUser)
  );
  passport.serializeUser((user, done) => {});
  passport.deserializeUser((user, done) => {});
};

module.exports = initialize;
