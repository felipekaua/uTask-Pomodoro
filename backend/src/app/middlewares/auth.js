const jwt = require('jsonwebtoken');

const verifyJWT = async (req, res, next) => {
  let token = req.headers.authorization;
  console.log(req.headers);
  token = token.split(' ')[1];

  if (!token)
    res.status(401).send({ auth: false, message: 'No token provided.' });

  jwt.verify(token, process.env.SECRET, function (err, decoded) {
    if (err)
      return res
        .status(500)
        .send({ auth: false, message: 'Failed to authenticate token.' });

    // adiciono o id do user a request para uso futuro
    req.userId = decoded.id;
    console.log(decoded.id);
    next();
  });
};

module.exports = verifyJWT;
