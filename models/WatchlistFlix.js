const mongoose = require('mongoose');
const { Schema } = mongoose;

const watchlistFlixSchema = new Schema ({
  netflixID: String,
  _user: { type: Schema.Types.ObjectId, ref: 'User' }
});

mongoose.model('watchlistFlixs', watchlistFlixSchema);