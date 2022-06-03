const jwt = require("jsonwebtoken");
const verifyToken = (req, res, next) => {  
  if(req.headers.token)
    {
        const authHeader = req.headers.token;
        if (authHeader) {
          const token = authHeader;
          jwt.verify(token, process.env.JWT_SEC, (err, user) => {
            if (err) res.json("Token is not valid!");
            req.user = user;
            next();
          });
        } else {
          return res.json("You are not authenticated!");
        }
      }else{
        return res.json("try Again");
      }
    };

const verifyTokenAndAuthorization = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.id === req.params.userId || req.user.isAdmin) {
      next();
    } else {
      res.json("You are not alowed to do that!");
    }
  });
};

const verifyAdmin = (req,res,next) => {
  verifyToken(req, res, () => {
    if (req.user.isAdmin) {
      next();
    } else {
      res.json("You are not alowed to do that as you are not the admin!");
    }
  });
}

module.exports = {verifyToken, verifyTokenAndAuthorization, verifyAdmin}