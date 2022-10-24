// *********************************1 Level************************************

// ДЗ функция countWordPrice принимает на вход слово word и массив prices вида
// { letter: <буква>, price: <число> } и возвращает стоимость слова

function countWordPrice(word, prices) {
  const wordPrice = [];
  for (let i = 0; i < word.length; i++) {
    let element = word[i];
    element = prices.find(function (a) {
      return a.letter === element;
    });
    wordPrice.push(element.price);
  }
  return wordPrice.reduce(function (accumulator, value) {
    return accumulator + value;
  }, 0);
}

console.log(
  countWordPrice('волк', [
    { letter: 'о', price: 1 },
    { letter: 'л', price: 1 },
    { letter: 'к', price: 2 },
    { letter: 'в', price: 5 },
  ])
); // 9

// *************************************************************************

// ДЗ функция whoTakeABook принимает на вход массив читателей, массив книг,
// массив билетов и название книги. Возвращает имя читателя, который взял
// книгу
function whoTakeABook(readers, books, records, bookName) {
  const bookId = books.findIndex(book => book.bookName === bookName);
  const recordId = records.findIndex(rec => rec.book === bookId);
  return records[recordId].reader;
}

console.log(
  whoTakeABook(
    ['Петя', 'Вася', 'Коля'],
    [
      { id: 1, bookName: 'Сказка о золотой рыбке' },
      { id: 2, bookName: 'Чёрный обелиск' },
      { id: 3, bookName: 'Норвежский лес' },
    ],
    [
      { reader: 'Петя', book: 2 }, // Петя взял "Чёрный обелиск"
      { reader: 'Петя', book: 1 }, // Петя взял "Сказка о золотой рыбке"
      { reader: 'Коля', book: 3 }, // Коля взял "Норвежский лес"
    ],
    'Чёрный обелиск'
  )
); // Петя

// Функции sum, reduce, mult и divide принимают на вход два числа
// a и b и производят соответствующее арифметическое действие

// *********************Level 2******************************************

function sum(a, b) {
  return a + b;
}
function reduce(a, b) {
  return a - b;
}
function mult(a, b) {
  return a * b;
}
function divide(a, b) {
  return a / b;
}

console.log(sum(2, 2)); // 4
console.log(reduce(2, 2)); // 0
console.log(mult(2, 2)); // 4
console.log(divide(2, 2)); // 1

// Функция calculate принимает на вход a, b и знак операции ("+", "-", "*", "/")
// и возвращает результат этой операции

function calculate(a, b, operation) {
  const operationToFunction = {
    '+': sum,
    '-': reduce,
    '*': mult,
    '/': divide,
  };
  return operationToFunction[operation](a, b);
  // operationToFunction[operation] = sum
  // sum(a,b)
}

console.log(calculate(2, 2, '+'));

// Функция calculateExpression принимает на вход строку str, в которой записана
// одна математическая операция вида "<число 1> <знак операции> <число 2>"
// и возвращает результат этой операции

function calculateExpression(str) {
  const arr = str.split(' '); // -5, +, -2
  const a = +arr[0]; // -5
  const b = +arr[2]; // -2
  const operation = arr[1];
  return calculate(a, b, operation);
}

console.log(calculateExpression('-5 + -2')); // -7
console.log(calculateExpression('3 * -5')); // -15

// Функция calculateExpressions принимает на вход строку str вида
// "<число 1> <знак операции> <число 2> <знак операции> <число 3> ..."
// и возвращает результат этой операции без учёта математических правил

function calculateExpressions(str) {
  let arr = str.split(' '); // ['3', '+','4','*','2']  ['7','*','2'] ['14']
  while (arr.length !== 1) {
    const threeItems = arr.slice(0, 3); // polucili 3 pervih elementa,3 + i 4
    const a = +threeItems[0]; // 3
    const b = +threeItems[2]; // 4
    const operation = threeItems[1]; // +
    const result = calculate(a, b, operation); // 7
    arr = [result, ...arr.slice(3)]; // ['7', '*','2']
  }
  return arr[0];
}

console.log(calculateExpressions('3 + 4 * 2')); // 14
console.log(calculateExpressions('1 + 2 - 3 + 4')); // 4

// Функция calculateExpressions2 принимает на вход строку str вида
// "<число 1> <знак операции> <число 2> <знак операции> <число 3> ..."
// и возвращает результат этой операции с учётом математических правил

function calculateExpressions2(str) {
  let arr = str.split(' '); // ['3', '+','4','*','2']  ['3','+','8'] ['11']
  while (arr.length !== 1) {
    const indexMultOrDivide = arr.findIndex(item => {
      // 3
      return item === '*' || item === '/';
    });
    if (indexMultOrDivide !== -1) {
      const threeItems = arr.slice(
        indexMultOrDivide - 1,
        indexMultOrDivide + 2
      );
      const a = +threeItems[0]; // 4
      const b = +threeItems[2]; // 2
      const operation = threeItems[1]; // '*'
      const result = calculate(a, b, operation); // 8
      arr = [
        ...arr.slice(0, indexMultOrDivide - 1),
        result,
        ...arr.slice(indexMultOrDivide + 2),
      ];
    } else {
      const threeItems = arr.slice(0, 3);
      const a = +threeItems[0];
      const b = +threeItems[2];
      const operation = threeItems[1];
      const result = calculate(a, b, operation);
      arr = [result, ...arr.slice(3)];
    }
  }
  return arr[0];
}

console.log(calculateExpressions2('3 + 4 * 2')); // 11
console.log(calculateExpressions2('1 + 2 - 3 + 4')); // 4

// ДЗ* Функция solveEquasion принимает на вход строку вида
// x <знак операции> <число> = <число> и возвращает значение x
function solveEquasion(str) {
  const arr = str.split(' '); // x + 5 = 9
  const a = +arr[4];
  const b = +arr[2];
  const operation = arr[1];
  if (operation === '+') {
    return a - b;
  }
  if (operation === '*') {
    return a / b;
  }
}

console.log(solveEquasion('x + 5 = 9')); // 4
console.log(solveEquasion('x * 5 = 30')); // 6
