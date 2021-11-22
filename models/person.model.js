const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

const Schema = mongoose.Schema;

const PersonSchema = new Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  favoriteFoods: { type: Array },
});

module.exports = mongoose.model('Person', PersonSchema);