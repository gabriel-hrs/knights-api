const redisClient = require('../config/redis');

exports.getHallOfHeroes = async () => {
  const heroes = await redisClient.lRange('hall_of_heroes', 0, -1);
  return heroes.map(JSON.parse);
};
