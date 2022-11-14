const calculateBonus = (a, b) => {
  let bonus;
  const sum = a + b;
  debugger; //происходит остановка кода и запускается дебаггер
  sum > 50 ? (bonus = 50) : (bonus = sum);
  debugger; //происходит остановка кода и запускается дебаггер
  return bonus;
};
console.log(calculateBonus(1, 5)); //добавил функцию, чтобы код заработал

//module.exports = calculateBonus; //экспортируем функцию
