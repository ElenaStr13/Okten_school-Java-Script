/* - Створити масив з 10 елементів будь-якого типу, вивести кожен елемент в консоль
- Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
- Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" -
являється  масивом. Кожен автор має поля name та age.
- Створити масив з 10 об'єктами, які описують сутніть "користувач". Поля: name, username,password.
Вивести в консоль пароль кожного користувача*/

arr = ["hello", "guys", "super", 2, 4, 6, 8, 10, true, NaN];
console.log(arr);
console.log(arr[0], arr[1], arr[2], arr[3], arr[4], arr[5], arr[6], arr[7], arr[8], arr[9]);

let book1 = {
    title: 'Sonya is a smart dog',
    pageCount: 76,
    genre: 'tale'
}
let book2 = {
    title: 'Magic alphabet',
    pageCount: 143,
    genre: 'tale'
}
let book3 = {
    title: 'Pollyanna',
    pageCount: 292,
    genre: 'tale'
}
//Поле "автори" -являється  масивом. Кожен автор має поля name та age.
//Я так зрозуміла, що автор - це масив (але name та age це схоже на ключі-поля до об'єкту...)
let bookAuthor1 = {
    title: 'Sonya is a smart dog',
    pageCount: 76,
    genre: 'tale',
    author: ['Usachev', 55]
}
let bookAuthor2 = {
    title: 'Magic alphabet',
    pageCount: 143,
    genre: 'tale',
    author: ['Usachev', 55]
}
let bookAuthor3 = {
    title: 'Pollyanna',
    pageCount: 292,
    genre: 'tale',
    author: ['Porter', 33]
}
let users = [
    {name: 'Alex', username: 'Ivanko', password: 1234},
    {name: 'Petro', username: 'Bagnuk', password: 5678},
    {name: 'Nikola', username: 'Kirev', password: 91011},
    {name: 'Olga', username: 'Shevchenko', password: 1213},
    {name: 'Max', username: 'Franko', password: 1415},
    {name: 'Andrea', username: 'Antonuk', password: 1617},
    {name: 'Anna', username: 'Borgan', password: 1819},
    {name: 'Sofia', username: 'Shevchenko', password: 2021},
    {name: 'Bob', username: 'Kostenko', password: 2223},
    {name: 'Darya', username: 'Stratelyuk', password: 2425}
];
console.log (`Passwords: ${users[0]['password']}, ${users[1]['password']}, ${users[2]['password']}, ${users[3]['password']},${users[4]['password']}`);
console.log (`Passwords: ${users[5]['password']}, ${users[6]['password']}, ${users[7]['password']}, ${users[8]['password']},${users[9]['password']}`);

//- Є змінна х, якій ви надаєте довільне числове значення.Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'.
// Перевірте  скрипт при a, що дорівнює 1, 0, -3
let x = 3;
 if (x===0) {
     console.log('Невірно');
 } else {
     console.log('Вірно');
 }
//  a = 1;
// if (a===0) {
//     console.log('Невірно');
// } else {
//     console.log('Вірно');
// }
// a = 0;
// if (a===0) {
//     console.log('Невірно');
// } else {
//     console.log('Вірно');
// }
// a = -3;
// if (a===0) {
//     console.log('Невірно');
// } else {
//     console.log('Вірно');
// }
a = [1, 0, -3];
for (let i = 0; i < a.length; i++) {
    if (a[i] === 0) {
        console.log (`${a[i]} Невірно`);
    } else {
        console.log (`${a[i]} Вірно`);
    }
}
/*Дано змінну time яка рівна числу від 0 до 59.Потрібно написати код, який перевірить, до якої четверті
години попадає число (в першу, другу, третю или четверту частину години).*/

let time = 36;

if (0 <= time && time <= 15) {
    console.log('The first part of the hour');
} else if (16 <= time && time <= 30) {
    console.log('The second part of the hour');
} else if (31 <= time && time <= 45) {
    console.log('The third part of the hour');
} else if (46 <= time && time <= 59) {
    console.log('The third part of the hour');
} else {
    console.log('Does not count towards the hour');
}

// time = 22;
// if (0 <= time && time <= 15) {
//     console.log('The first part of the hour');
// } else if (16 <= time && time <= 30) {
//     console.log('The second part of the hour');
// } else if (31 <= time && time <= 45) {
//     console.log('The third part of the hour');
// } else if (46 <= time && time <= 59) {
//     console.log('The third part of the hour');
// } else {
//     console.log('Does not count towards the hour');
// }

//- У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це
// число (у першу, другу чи третю).
let day = 29;

if (0 <= day && day <= 10) {
    console.log('The first decade of the month');
} else if (11 <= day && day <= 20) {
    console.log('The second decade of the month');
} else if (21 <= day && day <= 31) {
    console.log('The third decade of the month');
} else {
    console.log('Does not count towards the decade of the month');
}
//- Скласти розклад на тиждень за домопогою switch. Користувач вводить порядковий номер дня тижня і на екрані
//відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
 let dayOfWeek= +prompt(string  = 'Enter day of week', 1);
 switch (dayOfWeek) {
     case 1:
         console.log("Its Monday");
        break;
     case 2:
         console.log("Its Tuesday");
         break;
     case 3:
         console.log("Its Wednesday");
         break;
     case 4:
        console.log("Its Thursday");
         break;
     case 5:
         console.log("Its Friday");
         break;
     case 6:
         console.log("Its Saturday");
         break;
     case 7:
         console.log("Its Sunday");
         break;
     default:
         console.log("Sorry, this is not day of week");
 }
//- Користувач вводить або має два числа. Потрібно знайти та вивести максимальне число з тих двох .
//Також потрібно врахувати коли введені рівні числа.
let num1= +prompt(string  = 'Enter first number');
 let num2= +prompt(string  = 'Enter second number');

 if (num1 > num2 ) {
    console.log(`Максимальне число: ${num1}`);
 } else if (num1 < num2) {
     console.log(`Максимальне число: ${num2}`);
} else if (num1 === 0 && num2===0) {
     console.log('Enter correct number');
 } else if (num1 === num2) {
     console.log(`${num1}=${num2}`);
 }
//Є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно).
// Напишіть код який, за допомогою  оператора || буде присвоювати змінній х значення "default"
// якщо значення змінної х являється false (хибноподібні, тобто приводиться до false)

// let xx = false;
let xx = 1;
if (xx=== false || xx=== 0 ) {
    xx= 'default';
}
console.log (`x = ${xx}`);

//- з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray.
// За допомоги іф перевірити кожен його елемент на тривалість навчання. У випадку якщо
// тривалість довша за 5 місяців вивести в консоль "Супер".

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

for (let i = 0; i < coursesAndDurationArray.length; i++) {
    if (coursesAndDurationArray[i].monthDuration > 5) {
        console.log (`${coursesAndDurationArray[i].title} Super`);
    }
}

// alert("Гарного вечора")
Author = [{
    name:'Usachev',
    age: 55
}]