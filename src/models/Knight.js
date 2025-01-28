const mongoose = require('mongoose');

const weaponSchema = new mongoose.Schema({
  name: String,
  mod: Number,
  attr: String,
  equipped: Boolean,
});

const knightSchema = new mongoose.Schema({
  name: { type: String, required: true },
  nickname: { type: String, required: true },
  birthday: { type: Date, required: true },
  weapons: [weaponSchema],
  attributes: {
    strength: Number,
    dexterity: Number,
    constitution: Number,
    intelligence: Number,
    wisdom: Number,
    charisma: Number,
  },
  keyAttribute: String,
  attack: Number,
  exp: Number,
  isHero: { type: Boolean, default: false },
});

module.exports = mongoose.model('Knight', knightSchema);
