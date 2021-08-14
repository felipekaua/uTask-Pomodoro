const jwt = require('jsonwebtoken');
const User = require('../schemas/User');

/**
 * To do:
 * 
 * 1) Criptografar a senha no cadastro (salvar a senha criptografada)
 * 2) Comparar as senhas criptografadas no login
 * 
 * @see https://imasters.com.br/back-end/autenticacao-json-web-token-jwt-em-node-js
 * @see https://www.bezkoder.com/node-js-jwt-authentication-mysql/
 */

class UserController  {

  async create(req, res) {
    const {login, password} = req.body;
    const user = new User({
      'login': login,
      'password': password,
    });

    try {
      await user.save();
    } catch (err) {
      return res.status(400).send(`Ooops: ${err.message}`);
    }

    return res.json(user);
  }

  async login(req, res) {
    const { login, pass } = req.body;
    const user = await User.findOne({ login });

    if(!user)
      res.status(400).send('Oops: user not found');

    if(pass != user.password)
      res.status(400).send('Oops: password mismatch');

    // res.send(
    //   jwt.sign({ id: user.id }, process.env.SECRET, {
    //     expiresIn: 600 // 10min fora os ameaço
    //   })
    // );
    return res.json(user);
  }

}

module.exports = new UserController();