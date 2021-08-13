const jwt = require('jsonwebtoken');

const verifyJWT = async (req, res, next) => {
  const token = req.headers['x-access-token'];

  req.userId = '6116cde152ce332fbc72ebd6';
  // Teste
  return next();
  if (!token)
    res.status(401).send({ auth: false, message: 'No token provided.' });

  jwt.verify(token, process.env.SECRET, function (err, decoded) {
    if (err)
      return res
        .status(500)
        .send({ auth: false, message: 'Failed to authenticate token.' });

    // adiciono o id do user a request para uso futuro
    req.userId = decoded.id;

    next();
  });
};

module.exports = verifyJWT;
