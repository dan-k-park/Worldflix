module.exports = (req, res, next) => {
  // next passes the request off to the next middleware in the chain
  if (!req.user) {
    return res.status(401).send({ error: 'Login required' })
  }

  next();
}