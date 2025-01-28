const Knight = require('../models/Knight');
const { prepareKnight } = require('../services/knightService');
const redisClient = require('../config/redis');

exports.getKnights = async (req, res) => {
  const filter = req.query.filter;
  const knights = filter === 'heroes' ? await Knight.find({ isHero: true }) : await Knight.find();
  res.json(knights);
};

exports.getKnightById = async (req, res) => {
  const knight = await Knight.findById(req.params.id);
  if (!knight) return res.status(404).json({ message: 'Knight not found' });
  res.json(knight);
};

exports.createKnight = async (req, res) => {
  try {
    const knightData = prepareKnight(req.body);
    const newKnight = new Knight(knightData);
    await newKnight.save();
    res.status(201).json(newKnight);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateKnight = async (req, res) => {
  const knight = await Knight.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!knight) return res.status(404).json({ message: 'Knight not found' });
  res.json(knight);
};

exports.deleteKnight = async (req, res) => {
  const knight = await Knight.findByIdAndDelete(req.params.id);
  if (!knight) return res.status(404).json({ message: 'Knight not found' });

  await redisClient.lPush('hall_of_heroes', JSON.stringify(knight));
  res.json({ message: 'Knight moved to Hall of Heroes', knight });
};
