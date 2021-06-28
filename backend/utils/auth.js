const jwt = require("jsonwebtoken");

exports.createJWT = (email, userId, duration) => {
  const payload = {
    email,
    userId,
    duration,
  };
  return jwt.sign(payload, process.env.TOKEN_SECRET, {
    expiresIn: duration,
  });
};


exports.verify = (req, res, next) => {
    const token = req.headers.authorization
    if (!token) res.status(403).json({error: "please provide a token"})
    else {
        jwt.verify(token.split(" ")[1], process.env.TOKEN_SECRET, (err, value) => {
            if (err) res.status(500).json({error: 'failed to authenticate token'})
            req.user = value.data
            next()
        })
    }
}