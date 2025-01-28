const { calculateMod, calculateExperience } = require('../utils/calculations');

const calculateAttack = (knight) => {
  const equippedWeapon = knight.weapons.find((w) => w.equipped) || { mod: 0 };
  return 10 + calculateMod(knight.attributes[knight.keyAttribute]) + equippedWeapon.mod;
};

const prepareKnight = (knightData) => {
  const age = new Date().getFullYear() - new Date(knightData.birthday).getFullYear();
  knightData.exp = calculateExperience(age);
  knightData.attack = calculateAttack(knightData);
  return knightData;
};

module.exports = { prepareKnight };
