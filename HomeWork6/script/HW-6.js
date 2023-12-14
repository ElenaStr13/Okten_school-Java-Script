// 1. Знайти та вивести довижину настипних стрінгових значень 'hello world', 'lorem ipsum', 'javascript is cool'
let str1 = 'hello world';
console.log(str1.length);
let str2 = 'lorem ipsum';
console.log(str2.length);
let str3 = 'javascript is cool';
console.log(str3.length);

// 2. Перевести до великого регістру наступні стрінгові значення 'hello world', 'lorem ipsum', 'javascript is cool'
console.log(str1.toLocaleUpperCase());
console.log(str2.toLocaleUpperCase());
console.log(str3.toLocaleUpperCase());

// 3. Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
 str1 = 'HELLO WORLD';
console.log(str1.toLocaleLowerCase());
str2 = 'LOREM IPSUM';
console.log(str2.toLocaleLowerCase());
str3 = 'JAVASCRIPT IS COOL';
console.log(str3.toLocaleLowerCase());

//4. Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
let str = ' dirty string   ';
console.log(str.trim());

// 5. Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
str = 'Ревуть воли як ясла повні';
function stringToarray(str) {
    return  str.split(' ');
}
let arr = stringToarray(str);
console.log (arr); // ['Ревуть', 'воли', 'як', 'ясла', 'повні']

// 6. Є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.
arrNum = [10,8,-7,55,987,-1011,0,1050,0];
let mapArr = arrNum.map(String);
console.log(mapArr);
//7. Створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або
// навпаки в залежності від значення аргументу direction.
let nums = [11,21,3];
function sortNums(num, direction) {
if (direction === 'ascending' ) {
    num.sort (function(a,b) {
        return a-b;
    } )
} else if (direction === 'descending') {
    num.sort (function(a,b) {
        return b-a;
    } )
}
return num;
}
console.log(sortNums(nums,'ascending')) // [3,11,21]
console.log(sortNums(nums,'descending')) // [21,11,3]

// 8. Є масив.
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

// - відсортувати його за спаданням за monthDuration
function sortArr (arr) {
    arr.sort ((a,b) => {
        return b.monthDuration-a.monthDuration;
    } )
    return arr;
}
console.log(sortArr(coursesAndDurationArray))
// - відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
function filterArr (arr) {
    let newArr = arr.filter ((item) => {
        return item.monthDuration > 5;
    } )
    return newArr;
}
console.log(filterArr(coursesAndDurationArray))
// - за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}
let newCourses = coursesAndDurationArray.map ((item, index, array) => {
item.id = index
return array;
})
console.log(newCourses);
// 9. Описати колоду карт (від 6 до туза без джокерів)
let cards = [
    {name:6, color:'red', suit:"heart"},
    {name:7, color:'red', suit:"heart"},
    {name:8, color:'red', suit:"heart"},
    {name:9, color:'red', suit:"heart"},
    {name:10, color:'red', suit:"heart"},
    {name:'jack', color:'red', suit:"heart"},
    {name:'queen', color:'red', suit:"heart"},
    {name:'king', color:'red', suit:"heart"},
    {name:'ace', color:'red', suit:"heart"},
    {name:6, color:'red', suit:"diamond"},
    {name:7, color:'red', suit:"diamond"},
    {name:8, color:'red', suit:"diamond"},
    {name:9, color:'red', suit:"diamond"},
    {name:10, color:'red', suit:"diamond"},
    {name:'jack', color:'red', suit:"diamond"},
    {name:'queen', color:'red', suit:"diamond"},
    {name:'king', color:'red', suit:"diamond"},
    {name:'ace', color:'red', suit:"diamond"},
    {name:6, color:'black', suit:"spade"},
    {name:7, color:'black', suit:"spade"},
    {name:8, color:'black', suit:"spade"},
    {name:9, color:'black', suit:"spade"},
    {name:10, color:'black', suit:"spade"},
    {name:'jack', color:'black', suit:"spade"},
    {name:'queen', color:'black', suit:"spade"},
    {name:'king', color:'black', suit:"spade"},
    {name:'ace', color:'black', suit:"spade"},
    {name:6, color:'black', suit:"clubs"},
    {name:7, color:'black', suit:"clubs"},
    {name:8, color:'black', suit:"clubs"},
    {name:9, color:'black', suit:"clubs"},
    {name:10, color:'black', suit:"clubs"},
    {name:'jack', color:'black', suit:"clubs"},
    {name:'queen', color:'black', suit:"clubs"},
    {name:'king', color:'black', suit:"clubs"},
    {name:'ace', color:'black', suit:"clubs"}
]
// - знайти піковий туз
let findAce = cards.filter(item => item.name === 'ace' && item.suit === 'spade');
console.log(findAce);
// - всі шістки
let findAllSix = cards.filter(item => item.name === 6);
console.log(findAllSix);
// - всі червоні карти
let findAllRed = cards.filter(item => item.color === "red");
console.log(findAllRed);
// - всі буби
let findAllDiamond = cards.filter(item => item.suit === "diamond");
console.log(findAllDiamond);
// - всі трефи від 9 та більше
//спробувала в одній умові не вийшло
let findAllclubs = cards.filter(item => item.suit === "clubs");
let findAll9clubs = findAllclubs.filter (item =>
    typeof item.name === 'string' || item.name === 9 || item.name === 10);
console.log(findAll9clubs);

//     Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт

let sorting = cards.reduce((accumulator, card) => {
    if (card.suit === "heart") {
        accumulator.hearts.push(card);
    } else if (card.suit === "diamond") {
        accumulator.diamonds.push(card);
    }  else if (card.suit === "spade") {
        accumulator.spades.push(card);
    } else {
        accumulator.clubs.push(card);
    }
    return accumulator;
}, {
    hearts:[],
    diamonds:[],
    spades:[],
    clubs:[]
});
console.log(sorting);

// 10. Взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray
let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'angular',
            'aws', 'docker', 'git', 'java core', 'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb',
            'angular', 'aws', 'docker', 'python core', 'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html','css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws',
            'docker', 'git', 'node.js', 'python', 'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];
// -написати пошук всіх об'єктів, в який в modules є sass
console.log(coursesArray.filter((item) => item.modules.includes('sass')));
// let findCourseCss = coursesArray.filter(el => el.modules.includes(item => item === 'sass') )
// console.log (findCourseCss);
// let courses = coursesArray.reduce((accumulator, course) => {
//     if (course.modules.includes('sass' ) ) {
//         accumulator.push(course);
//     }
//     // else if (course.modules === "docker") {
//     //     accumulator.docker.push(course);
//     // }
//     return accumulator;
// }, [] );
// console.log (courses);
//console.log (courses.map(el => el.modules.includes('sass')));
// -написати пошук всіх об'єктів, в який в modules є docker
console.log(coursesArray.filter((item) => item.modules.includes('docker')));