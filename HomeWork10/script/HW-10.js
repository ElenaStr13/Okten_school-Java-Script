//Стоврити форму з трьома полями для name,sruname,age та кнопкою. При натисканні на кнопку зчитати
// данні з полів, та вивести об'єкт в документ. Іншими словами : заповниои форму, натиснули кнопку,
// під формою з'явився блок з вашим об'єктом
let form = document.forms[0];
document.forms['formaUser'];
let btnshow = document.getElementById('btnShow');
let users = [];
form.onsubmit = function (event) {
    event.preventDefault();
    let name = event.target.name.value
    let surname = event.target.surname.value;
    let age = +this.age.value;
    users.push({name, surname, age});
};

btnshow.addEventListener('click', function (e) {
    for (const user of users) {
        let div = document.createElement('div');
        div.innerText = `user: name - ${user.name} surname - ${user.surname}, age - ${user.age}`;
        document.body.append(div);
    }
});

//є сторінка, на якій є блок, у якому знаходиться цифра. написати код, який при кожному перезавантажені сторінки
// буде додавати до неї +1


let n = localStorage.getItem('on_load_counter');
if (n === null) {
    n = 0;
}
n++;
localStorage.setItem("on_load_counter", n);
document.querySelector(".number").innerHTML = n;
// let counter = +document.querySelector(".number");
// window.onload = function () {
//    counter.innerText = +(counter.innerText) + 1;
// };

//Є сторінка index.html (назва довільна), при відвідуванні якої в локальне сховще, в масив sessions зберігається
// інформація про дату та час відвідування сторінки. Є ще сторінка sessions.html (назва довільна), при відвідуванні
// якої потрібно відмалювати всю інформацію про відвідування сторінки index.html. Інфу НЕ виводити в консоль, а
// побудувати дом структуру під кожну сессію

// запускає оновлення, створені в тому самому сховищі з інших документів
// window.onstorage = event => { // також можна використовувати window.addEventListener('storage', event => {
//     if (event.key != 'now') return;
//     alert(event.key + ':' + event.newValue + " в " + event.url);
// };
//
// localStorage.setItem('now', Date.now());

//зробити масив на 100 об'єктів та дві кнопки prev next при завантажені сторінки з'являються перші 10 об'єктів.
//При натисканні next виводяться настпні 10 об'єктів при натисканні prev виводяться попередні 10 об'єктів
let b= document.querySelector(".number");
let divAnother = document.createElement("div");
b.append(divAnother);
let arrNumber =
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
    10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
    20, 21, 22, 23, 24, 25, 26, 27, 28, 29,
    30, 31, 32, 33, 34, 35, 36, 37, 38, 39,
    40, 41, 42, 43, 44, 45, 46, 47, 48, 49,
    50, 51, 52, 53, 54, 55, 56, 57, 58, 59,
    60, 61, 62, 63, 64, 65, 66, 67, 68, 69,
    70, 71, 72, 73, 74, 75, 76, 77, 78, 79,
    80, 81, 82, 83, 84, 85, 86, 87, 88, 89,
    90, 91, 92, 93, 94, 95, 96, 97, 98, 99,
    100,];
window.onload = function () {
    for (let i = 0; i < 10 ; i++) {
        let span = document.createElement('span');
        span.innerHTML = arrNumber[i];
        divAnother.append(span);
    }
};
document.querySelector('#prev').onclick = function() {

}
document.querySelector('#next').onclick = function() {
    // arrNumber.map(el => {
    //     for (let i = 0; i < 20; i++) {
    //         let span = document.createElement('span');
    //         span.innerHTML = el[i];
    //         divAnother.append(span);
    //     }
    // })
}

//Створити довільний елемент з id = text та створити кнопку.Використовуючи JavaScript, зробіть так, щоб при
// натисканні на кнопку зникав елемент з id="text".

document.querySelector('.hidden').onclick = function() {
    document.getElementById('text').hidden = true;
}

//створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію
// з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
let btnCheck = document.querySelector('.check');
btnCheck.addEventListener('click', function (e) {
    let p = document.createElement('p');
    let age  = +document.querySelector(".ageHuman").value;
    if (age > 18) {
        p.innerText = `age more "18" - ${age}`;
        document.body.append(p);
    }
});

//Створити 3 інпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вміст ячеєк.
//При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
//(Додатковачастина для завдання)
let out = document.getElementById('out');
let inputRow = document.getElementById('inputRow');
let inputCell = document.getElementById('inputCell');
let inputText = document.getElementById('inputText');

inputRow.addEventListener('input', draw);
inputCell.addEventListener('input', draw);
inputText.addEventListener('input', draw);

function draw() {
    out.innerHTML = inputRow.value;
    for (let i = 0; i < inputRow.value; i++) {
        let row = document.createElement('div');
        row.classList.add('row');
        out.appendChild(row);
        for (let j = 0; j < inputCell.value; j++) {
            let cell = document.createElement('section');
            cell.innerText = inputText.value;
            row.appendChild(cell);
        }
    }
}
//(подібне було вище, але...будьте уважні в другій частині) створити сторінку з довільним блоком, в середині якого
// є значення "100грн"
//при перезавантаженні сторінки до значаення додається по 10грн, але !!!
//зміна ціни відбувається тільки на перезавантаження, які відбулись пізніше ніж 10 секунд після попереднього.
//При перезавантаженні, яке відбулось раніше ніж минуло 10 секунд - нічого не відбувається