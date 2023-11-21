// Створити змінні. Присвоїти кожному з них значення:
// 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
// Вивести кожну змінну за допомогою: console.log

let str1='hello', str2='owu', str3='com', str4 = 'ua';
let num1=1, num2=10, num3=-999, num4=123, num5=3.14, num6 =2.7,  num7 = 16;
let bol1=true, bol2 = false;
console.log (str1, str2,str3,str4);
console.log (num1, num2,num3,num4, num5, num6, num7);
console.log (bol1, bol2);

// Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ.
// З'єднати їх в одну змінну person (Не об'єкт, просто за допомоги конкатенації)
let firstName = 'Olena ';
let middleName='Valeriivna ';
let lastName='Stratelyuk';
console.log (firstName+middleName+lastName);

// За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
//let a = 100; let b = '100'; let c = true;
let a = 100, b = '100', c = true;
console.log (typeof (a),typeof (b),typeof (c));

//Додаткове для тих хто цікавився prompt`oм
//За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям,
// По-Батькові та роками. та вивести в консоль
prompt('Denis', '');
prompt('Shevchenko');
prompt('21');