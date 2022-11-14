const calculateBonus = require("./hw-9-2");

describe("Тестирование функции calculateBonus", () => {
  it("Проверка граничных условий для значения 50 ", () => {
    expect(calculateBonus(24, 25)).toBe(49); //сделал проверку граничных значений
    expect(calculateBonus(25, 25)).toEqual(50);
    expect(calculateBonus(26, 25)).toEqual(50);
  });

  it("Проверим результат на значение больше и меньше ", () => {
    expect(calculateBonus(24, 25)).toBeLessThan(50); //избыточная проверка, но
    //просто хотелось проверить)))
    expect(calculateBonus(0, 0)).toBeLessThan(50); //как советуют проверил с нулевыми значениями
  });
});
