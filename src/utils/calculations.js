const calculateMod = (value) => {
    if (value <= 8) return -2;
    if (value <= 10) return -1;
    if (value <= 12) return 0;
    if (value <= 15) return 1;
    if (value <= 18) return 2;
    return 3;
  };
  
  const calculateExperience = (age) => {
    return age < 7 ? 0 : Math.floor((age - 7) * Math.pow(22, 1.45));
  };
  
  module.exports = { calculateMod, calculateExperience };
  