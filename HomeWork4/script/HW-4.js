// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
let a = 3;
let b = 4;
function AreaOfRectangle(a, b) {
    return a * b;
}
let area =AreaOfRectangle(a, b);
console.log("Площа прямокутника: " + area);
// - створити функцію яка обчислює та повертає площу кола з радіусом r
let r = 3;
let pi = 3.14;
function AreaOfCircle(pi,r) {
    return 2 * pi * r * r;
}
let areaCircl =AreaOfCircle(pi, r);
console.log("Площа кола: " + areaCircl.toFixed(2));
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
function AreaOfCylinder(pi, rC, h) {
    return 2 * pi * rC * h;
}
let AreaCylinder =AreaOfCylinder(3.14, 3, 4);
console.log("Площа ціліндру: " + AreaCylinder.toFixed(0));
// - створити функцію яка приймає масив та виводить кожен його елемент
function output(y) {
    for (let i = 0; i <y.length ; i++) {
        console.log(i+":"+y[i]);
    }
}
output([1, 1, 2, 3, 5, 8, 13, 21]);

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
function text (msg) {
    let p = document.createElement('p');
    p.innerText = msg;
    document.body.append(p);
}
text ("World");
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
function textUl (liText) {
    let ul = document.createElement('ul');
    let fragment = new DocumentFragment();
    document.body.append(ul);

    for(let i=1; i<=3; i++) {
        let li = document.createElement('li');
        li.append(liText);
        ul.append(li);
    }
    return ul
}
textUl ("All body");
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
function textUlMode (liText, a) {
    let ul = document.createElement('ul');
    document.body.append(ul);

    for(let i=1; i<=a; i++) {
        let li = document.createElement('li');
        li.append(liText);
        ul.append(li);
    }
    return ul
}
textUlMode ("Another body", 5);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
function arrayList (arr) {
    let ol = document.createElement('ol');
    document.body.append(ol);

    for(let i=0; i < arr.length; i++) {
        let li = document.createElement('li');
        li.append(arr[i]);
        ol.append(li);
    }
    return ol
}
arrayList ([2, 4, 6, "orange", true]);
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
// Для кожного об'єкту окремий блок.
function user (arrUser) {
    let div = document.createElement('div');
    document.body.append(div);

    for(let i=0; i < arrUser.length; i++) {
        let span = document.createElement('span');
        let br = document.createElement('br');
        div.append("id user:" + arrUser[i].id + "; ");
        div.append("name user:" + arrUser[i].name + "; ");
        div.append("age of user:" + arrUser[i].age + "; ");
        div.append(br);
        //div.append(span);
    }
    return div
}
user ([
    {
        id: 2,
        name: "Nick",
        age:35
    },
    {
        id: 3,
        name: "Orest",
        age:37
    },
    {
        id: 4,
        name: "Zahar",
        age:39
    }
]);
// - створити функцію яка повертає найменьше число з масиву
function min (arrMin) {
    let m;
    for (let i = 0; i <arrMin.length ; i++) {
        if (arrMin[i-1] < arrMin[i]) {
            m = arrMin[i-1]
        }
    }
    return m;
}
console.log("Min number: " + min([-1, 5, 0, -4, 10, 2]));
// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його.
function sum (arrSum) {
    let s = 0;
    for (let i = 0; i <arrSum.length ; i++) {
        s = s + arrSum[i];
    }
    return s;
}
 console.log("sum of array: " + sum([1,2,10])); //->13
// - створити функцію swap(arr,index1,index2). Функція міняє місцями значення у відповідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
function swap (arrIndex,index1,index2) {
    newArrIndex = [];
    for (let i = 0; i < arrIndex.length ; i++) {
        let num1;
        let num2;
        newArrIndex[i] = arrIndex[i];
        console.log(newArrIndex);
        if (i === index1) {
            num1 = arrIndex[i];
            newArrIndex[index2] = num1;
        } else if (i === index2) {
            num2 = arrIndex[i];
            newArrIndex[index1] = num2;
        }
    }
    return newArrIndex;
}
console.log("swap of array: " + swap([11,22,33,44],0,1));
// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250
function exchange(sumUAH,currencyValues,exchangeCurrency) {
    let exc;
    for (let i = 0; i <currencyValues.length ; i++) {
        if (exchangeCurrency === currencyValues[i].currency) {
            exc = sumUAH / currencyValues[i].value
        }
        return exc;
    }
    return exc;
}
console.log((exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD'))) // => 250