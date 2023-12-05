//треба все зробити стрілковими функціями
//1. створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
let rect = (a,b) => a*b;
console.log('area of a rectangle:'+ rect(3,4));
// function calc(a,b) {
//     return a + b;
// }
// let calc = (a, b) => /*return*/ a + b;
// console.log(calc(10, 20));
//
// let asd = () => console.log(arguments);
// console.log(asd('ASD'));
// 2.створити функцію яка обчислює та повертає площу кола з радіусом r
let circle = (pi, r, h) => 2 * pi * r * r;
console.log('area of a circle:'+ circle(3.14,4).toFixed(0));

//3. створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
let cylinder = (pi, rC, h) => 2 * pi * rC * h;
console.log('area of a cylinder:'+ cylinder(3.14,4, 5).toFixed(0));
// 4. створити функцію яка приймає масив та виводить кожен його елемент
let output = (y) =>  {
    for (let i = 0; i <y.length ; i++) {
        console.log(i+":"+y[i]);
    }
}
output([1, 1, 2, 3, 5, 8, 13, 21]);
// 5. створити функцію яка створює параграф з текстом. Текст задати через аргумент
// робила через createElement так як це є в робочому коді в цій же папці до уроку,як я розумію ми вже це повинні знати
function text (msg) {
    document.write(`<p>${msg}</p>`)
    // let p = document.createElement('p');
    // p.innerText = msg;
    // document.body.append(p);
}
text ("Hello. My name is Olena.");
//6. створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// не знаю як по іншому включити теги html за допомогою js, як createElement та document.body.append
let textUl = (liText) => {
    document.write(`
        <ul>
            <li>${liText}</li>
            <li>${liText}</li>
            <li>${liText}</li>
        </ul>
    `);
}
textUl ("This body");
// 7. створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
let textUlMode = (liText, a) => {
    document.write(`<ul>`);
    for (let i = 0; i < a; i++) {
        document.write(`<li>${liText}</li>`);
    }
    document.write(`</ul>`);
}
textUlMode ("For this body", 5);
// 8. створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
let arrayList =  (arr) => {
    document.write(`<ul>`);
    for (const item of arr) {
        document.write(`<li>${item}</li>`);
    }
    document.write(`</ul>`);
}
arrayList ([2, 4, 6, "orange", true]);
// 9. створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
// Для кожного об'єкту окремий блок.
let user = (arrUser) => {
    for (const user of arrUser) {
        document.write(`id user: ${user.id} - Name user: ${user.name} - Age of user: ${user.age}`)
    }
}
user ([
    {
        id: 6,
        name: "Olya",
        age:37
    },
    {
        id: 9,
        name: "Oksana",
        age:38
    },
    {
        id: 4,
        name: "Dana",
        age:39
    }
]);
// 10. створити функцію яка повертає найменьше число з масиву
let minNum = (arrMin) => {
    let min = arrMin[0];
    for (const num of arrMin) {
        if (min > num) min = num
    }
    return min;
}
console.log(`Min number: ${minNum([-1, 5, 0, -4, 10, 2])}`);

// 11.створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його.
// Приклад sum([1,2,10]) //->13
let summ = (arrSum) => {
    let result = 0;
    for (const num of (arrSum)) {
        result += num;
    }
    return result;
}
console.log(`sum of array: ${summ([1, 2, 10])}`);
// 12.створити функцію swap(arr,index1,index2). Функція міняє місцями значення у відповідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
let swap = (arrIndex,index1,index2) => {
    const num1 = arrIndex[index1];
    arrIndex[index1] = arrIndex[index2];
    arrIndex[index2] = num1;
    return arrIndex;
}

console.log(swap([11, 22, 33, 44], 0, 1));
// 13. написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250
let exchange = (sumUAH, currencyValues, exchangeCurrency) => {
    for (const currency of currencyValues) {
        if (currency.currency === exchangeCurrency) {
            return sumUAH / currency.value
        }
    }
}

const currencies = [{currency: 'USD', value: 40}, {currency: 'EUR', value: 42}];

console.log(exchange(10000, currencies, 'USD').toFixed(2));
console.log(exchange(10000, currencies, 'EUR').toFixed(2));