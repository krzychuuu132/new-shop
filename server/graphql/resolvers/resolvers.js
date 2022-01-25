const User = require('../../models/User');
const handler = require('../../utils/get-products');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const resolvers = {
  hello: () => {
    return 'Hello world!';
  },
  users: () => {
    return ['krzysiek', 'damian', 'filip'];
  },

  products: async () => {
    const products = await handler();
    console.log(products);
    return products;
  },

  login: async (args, res) => {
    const { email, password } = args;
    const user = await User.findOne({ email });

    if (!user)
      return {
        error: { type: 'email', message: 'user o takim mailu nie istnieje' },
      };

    try {
      const comparePassword = await bcrypt.compare(password, user.password);

      if (!comparePassword)
        return {
          error: { type: 'password', message: 'hasło jest nieprawidłowe!' },
        };

      const token = jwt.sign(
        { userId: user.id, email: user.email },
        'secretkey',
        {
          expiresIn: '1h',
        }
      );

      return {
        userId: user.id,
        token: token,
        tokenExpiration: 1,
      };
    } catch (err) {
      throw new Error(err);
    }
  },

  register: async (args) => {
    const { name, surname, email, password } = args;

    try {
      const emailExist = await User.findOne({ email });

      if (emailExist) return 'user o takim e-mailu już istnieje';

      const hashedPassword = await bcrypt.hash(password, 10);

      const newUser = new User({
        name,
        surname,
        email,
        password: hashedPassword,
      });

      newUser.save((err) => {
        if (err) throw new Error(err);
      });

      return;
    } catch (err) {
      throw new Error(err);
    }
  },
};

module.exports = resolvers;
