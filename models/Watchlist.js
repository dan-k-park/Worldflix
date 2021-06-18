const mongoose = require('mongoose');
const { Schema } = mongoose;

const watchlistSchema = new Schema ({
  netflixID: String,
  _user: { type: Schema.Types.ObjectId, ref: 'User' }
});

mongoose.model('watchlists', watchlistSchema);