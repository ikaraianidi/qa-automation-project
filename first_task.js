/* 1. Написати функцію, яка у випадку якщо типи двох аргументів string поверне їх зконкатенований вираз,
якщо типи двох аргументів number - поверне їх помножене значення
та у будь якому випадку не співпадіння поверне текст There are no type matches for operation */

function typeChecker(arg1, arg2) {
// ваш код
}

// Приклад роботи функції:
console.log(typeChecker(2, 3)); // виведе 6
console.log(typeChecker("My", "text")); // виведе Mytext
console.log(typeChecker(true, 5)); // виведе There are no type matches for operation

/* 2. Написати функцію, яка, використовуючи тернарний оператор, виводить у консоль Yes, якщо число
позитивне, та No якщо воно негативне */
function isNegative(value) {
// ваш код
}

// Приклад роботи функції:
isNegative(-1); // виведе у консоль "Yes"
isNegative(1); // виведе у консоль "No"

/* 3. Написати функцію, яка повертає true якщо перший аргумент ділиться на другий без остачі, 
або якщо ні - повертає false */
function divider(num1, num2) {
// ваш код
}

// Приклад роботи функції:
console.log(divider(4, 2)); // виведе у консоль true
console.log(divider(3, 2)); // виведе у консоль false

/* 4. Написати функцію, яка рекурсивно виводить в консоль аргумент та збільшує його на 2 якщо аргумент не
перевищує за значенням число 10 */
function recursiveAddition(value) {
// ваш код
}

// Приклад роботи функції:
recursiveAddition(5); // виведе в консоль по черзі 5, 7, 9
recursiveAddition(2); // виведе в консоль по черзі 2, 4, 6, 8, 10
recursiveAddition(11); // не виведе нічого


