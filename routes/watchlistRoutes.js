const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin')

const Watchlist = mongoose.model('watchlists');

module.exports = app => {
  app.get('/api/watchlists', requireLogin, async (req, res) => {
    const watchlist = await Watchlist.find({ _user: req.user.id })
    res.send(watchlist);
  });

  app.post('/api/watchlists', requireLogin, async (req, res) => {
    const { flixInfo } = req.body;
    const watchlist = new Watchlist({
      // key and values title: title are identical
      flixInfo,
      _user: req.user.id,
    });


    
    try {    
      const existingWatchlist = await Watchlist.findOne({ _user: req.user.id, flixInfo })
      const user = await req.user
      
      if (!existingWatchlist) {
        await watchlist.save();
        user.save()
      }

      res.send(user);
    } catch(err) {
      console.error(err)
      res.status(422).send(err);
    }
  });

  app.delete('/api/watchlists/:watchlistId', requireLogin, async (req, res) => {
    console.log()
  })
};