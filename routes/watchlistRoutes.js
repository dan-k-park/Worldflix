const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin')

const Watchlist = mongoose.model('watchlists');

module.exports = app => {
  app.get('/api/watchlists', requireLogin, async (req, res) => {
    const watchlist = await Watchlist.find({ _user: req.user.id })

    res.send(watchlist);
  });

  app.post('/api/watchlists', requireLogin, async (req, res) => {
    const { netflixID } = req.body;

    const watchlist = new Watchlist({
      // key and values title: title are identical
      netflixID,
      _user: req.user.id,
    });

    try {
      await watchlist.save();
      const user = await req.user.save();

      res.send(user);
    } catch {
      res.status(422).send(err);
    }
  });
};