// *****************************LEVEL 1**********************************

// ДЗ Функция randomPhone возвращает случайно сгенерированный номер телефона в формате "ххх-ххх", где х - цифра от 0 до 9.
//    Номер телефона не может начинаться с 0.

function randomPhone() {
  let numbers = Math.ceil(100000 + Math.random() * 900000) + '';
  let firstPart = numbers.slice(0, 3);
  let secondPart = numbers.slice(3, 6);
  let connectedParts = `${firstPart}-${secondPart}`;

  return connectedParts;
}
console.log(randomPhone());

// 2 Variant
function randomPhone() {
  let res = '';
  res += Math.ceil(9 * Math.random());
  for (let i = 0; i < 5; i++) {
    const x = Math.random();
    res += Math.floor(10 * x);
  }
  return `${res.slice(0, 3)} - ${res.slice(3)}`;
}
console.log(randomPhone());

// ДЗ Функция isCube принимает на вход число a и возвращает true, если а - это куб какого-то числа

function isCube(num) {
  for (let i = 1; Math.pow(i, 3) <= num; i++) {
    if (Math.pow(i, 3) === num) {
      return true;
    }
  }
  return false;
}
console.log(isCube(125));
console.log(isCube(5));

// 2 Variant
function isCube(a) {
  let i = 0;
  while (Math.pow(i, 3) <= Math.abs(a)) {
    if (a === Math.pow(i, 3)) {
      return true;
    }
    i++;
  }
  return false;
}

console.log(isCube(125));
console.log(isCube(5));

// ДЗ Функция triangleSquare принимает стороны треугольника a, b и c и возвращает его площадь. Для расчёта площади
//    можно воспользоваться формулой Герона.

const triangleSquare = (a, b, c) => {
  let semiperimeter = (a + b + c) / 2;
  let square =
    semiperimeter *
    (semiperimeter - a) *
    (semiperimeter - b) *
    (semiperimeter - c);
  let triangleSquare = Math.sqrt(square).toFixed(2);
  return triangleSquare;
};

console.log(triangleSquare(6, 5, 2.2));
console.log(triangleSquare(10, 8, 3));

// *****************************LEVEL 2*********************************

// ДЗ Функция getDistance принимает x1, y1, x2, y2 (координаты двух точек в Евклидовом пространстве) и возвращает
//    расстояние между ними

const getDistance = (x1, y1, x2, y2) =>
  Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));

console.log(getDistance(2, 3, 4, 5));

// 2 Variant

function getDisstance(x1, x2, y1, y2) {
  const dx = x2 - x1;
  const dy = y2 - y1;
  return Math.pow(dx * dx + dy * dy, 0.5);
}

console.log(getDisstance(2, 3, 4, 5));
