const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin')

const Watchlist = mongoose.model('watchlists');

module.exports = app => {
  app.get('/api/watchlists', requireLogin, async (req, res) => {
    const watchlist = await Watchlist.find({ _user: req.user.id })
    res.send(watchlist);
  });

  // CHANGE THIS SO THAT FLIX INFO IS REQ.BODY FOR DOCUMENT CREATION
  app.post('/api/watchlists', requireLogin, async (req, res) => {
    const { flix } = req.body;

    const watchlist = new Watchlist({
      // key and values title: title are identical
      netflixID,
      _user: req.user.id,
    });

    try {
      await watchlist.save();
      const user = await req.user.save();

      res.send(user);
    } catch(err) {
      console.error(err)
      res.status(422).send(err);
    }
  });
};