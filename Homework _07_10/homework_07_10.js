// **************************Level 1********************************
// ДЗ Функция cut принимает на вход строку, режет её посередине
// и возвращает первую половину. Если в строке нечётное число
// символов, то округлить в меньшую сторону

const cut = str => {
  let firstPart;
  if (str.length % 2 !== 0) {
    firstPart = str.slice(0, Math.floor(str.length / 2));
  } else {
    firstPart = str.slice(0, str.length / 2);
  }

  return firstPart;
};
console.log(cut('magic'));
console.log(cut('mama'));

// 2 Solution
function cut2(string) {
  if (string.length % 2 == 0) {
    let result = string.substring(0, string.length / 2);
    return result;
  } else {
    let lastIndex = Math.floor(string.length / 2);
    let result = string.substring(0, lastIndex);
    return result;
  }
}

console.log(cut2('magic'));
console.log(cut2('telephon'));

// ********************************************************************

// ДЗ Функция kingSaid принимает на вход строку str и добавляет к
// её началу фразу "Король сказал: ". Если строка уже начинается
// с фразы "Король сказал: ", то ничего добавлять не надо.
// пример: kingSaid("хочу банан") -> "Король сказал: хочу банан"
//         kingSaid("Король сказал: я устал, я ухожу") -> "Король сказал: я устал, я ухожу"

const kingSaid = str => {
  let string = 'Король сказал:';
  let re = /Король сказал:/g;
  let match = str.match(re);
  if (string == match) {
    return str;
  } else if (string != match) {
    return `${string} ${str}`;
  }
};
console.log(kingSaid('Хочу банан'));
console.log(kingSaid('Король сказал: я устал, я ухожу'));

// 2 SOlution
function kingSaid2(string) {
  let checkSaid = string.substring(0, string.indexOf(':') + 1);
  if (checkSaid.startsWith('Король сказал:')) {
    console.log(string);
  } else {
    console.log(`Король сказал: ${string}`);
  }
}

kingSaid2('Король сказал: привет');
kingSaid2('привет');

// ***************************Level 2**********************************

// ДЗ Функция isItFridayToday возвращает строку "Пятница будет
// через N дней", "Пятница уже завтра!", "Ура, сегодня пятница!"
// или "Пятница была вчера :(" в зависимости от текущего дня недели

const isItFridayToday = () => {
  const now = new Date().getDay();
  if (now === 0) {
    return `Пятница будет через 5 дней`;
  } else if (now === 1) {
    return `Пятница будет через 4 дня`;
  } else if (now === 2) {
    return `Пятница будет через 3 дня`;
  } else if (now === 3) {
    return `Пятница будет через 2 дня`;
  } else if (now === 4) {
    return `Пятница уже завтра!`;
  } else if (now === 5) {
    return `Ура, сегодня пятница!`;
  } else if (now === 6) {
    return `Пятница была вчера`;
  }
};

console.log(isItFridayToday());

// 2 Solution

function isItFridayToday2() {
  result = new Date();
  let dayNum = result.getDay();
  if (dayNum == 5) {
    return `Ура, сегодня пятница!`;
  } else if (dayNum == 4) {
    return `Пятница уже завтра!`;
  } else if (dayNum == 6) {
    return `Пятница была вчера`;
  } else {
    return `Пятница будет через ${5 - dayNum} ${
      5 - dayNum == 5 ? 'дней' : 'дня'
    }`;
  }
}

console.log(isItFridayToday2());
