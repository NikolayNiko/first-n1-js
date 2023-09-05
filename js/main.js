// alert('Hello, world and Mykola');

// prompt('Enter name');

// confirm('Are you agree?');

// console.log('This is js');
// let a = 17;
// let b = 3;



// let summ = a + b;
// let minus = a - b;
// let multip = a * b;
// let division = a / b;
// let exponentiation = a**b;
// console.log(summ);
// console.log(minus);
// console.log(multip);
// console.log(division);
// console.log(exponentiation);
// console.log(Math.floor(a/b));
// console.log(Math.ceil(a/b)); // округление в большую сторону - єто деление без остатка или?


// its my first solution to js from step

// let a = 5;
// let b = 3.7;
// let c = -10;

// console.log(a);
// console.log(b);
// console.log(c);

// console.log(typeof a);

// let sum = a + b;
// console.log(sum);

// console.log('hello', typeof 'hello');


// let userName = 'Ivan';
// let userFamily = 'Ivanov';
// let userAge = '30';

// let userDate = userName + ' ' + userFamily + '(' + userAge + ')';

// console.log(userName, userFamily, '(', userAge, ')');

// console.log(userName + ' ' + userFamily + ' ' + '(' + userAge + ')');

// console.log(userDate);

// let num1 = prompt('Enter number');
// let num2 = prompt('Enter number');

// console.log('First number:', num1);
// console.log('Sec number:', num2);

// console.log('num1', typeof num1);
// console.log('num2', typeof num2);

// console.log(num1, '+', num2, '=', num1 + num2);
// console.log(num1, '-', num2, '=', num1 - num2);
// console.log(num1, '*', num2, '=', num1 * num2);
// console.log(num1, '/', num2, '=', num1 / num2);
// console.log(num1, '^', num2, '=', num1 ** num2);

// console.log(5 > 6);
// console.log(5 < 6);
// console.log(5 >= 5);
// console.log(5 != 4);
// console.log('Dima' == 'Dima');
// console.log('Dima' == 'dima');

// if else

// let a = 5;
// let b = 4545;

// console.log('a:', a, 'b:', b);

// if (a > b) {
//     console.log('a > b');
// }

// if (a < b) {
//     console.log('a < b');
// }

// let login = 'admin';
// let userLogin = prompt('Enter login');

let balance = 1000;
let currency = 'грн';
let privet = 'Вітаємо Вас! Ви скористалися найкращbм та найновішим банкоматом серіЇ F31, якщо бажаєте первірити баланс - натисніть 1, поповнити картку - натисніть 2, зняти кошти - натисніть -3';

let variantAnswer = prompt(privet);


if (variantAnswer == 1) {
    console.log('Ваш баланс', balance);   
};

if (variantAnswer == 2) {
    console.log('Ваш баланс', balance);
    let popovnennja = prompt('На яку суму бажаєте поповнити?');
    balance = balance + popovnennja;
    console.log('Ваш баланс', balance);
};


if (variantAnswer == 3) {
    console.log('Ваш баланс', balance);
    let znjattja = prompt('Яку суму бажаєте зняти?');
    balance = balance - znjattja;
    console.log('Ваш баланс', balance);
};
