// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
function User (id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone
}
let user1 = new User(2, "Vitalina", 'Stratelyuk', 'Vita1@gmail.com', '06767676767');
let user2 = new User(1, "Valentina", 'Stratelyuk', 'Val1@gmail.com', '06767676768');
let user3 = new User(4, "Elena", 'Stratelyuk', 'El1@gmail.com', '06767676769');
let user4 = new User(3, "Dmutro", 'Stratelyuk', 'Dmut1@gmail.com', '06767676761');
let user5 = new User(6, "Oleksiy", 'Shevchenko', 'Olek1@gmail.com', '06767676762');
let user6 = new User(5, "Vitaliy", 'Shevchenko', 'Vit1@gmail.com', '06767676763');
let user7 = new User(7, "Kate", 'Shevchenko', 'Kat1@gmail.com', '06767676764');
let user8 = new User(8, "Nastya", 'Shevchenko', 'Nast1@gmail.com', '06767676765');
let user9 = new User(9, "Maksim", 'Sushko', 'Maks1@gmail.com', '06767676766');
let user10 = new User(10, "Marta", 'Sushko', 'Mart1@gmail.com', '06767676713');
let users = [user1, user2, user3, user4, user5, user6, user7, user8, user9, user10];
console.log(users);
// for (let i = 0; i < 11; i++) {
//     users.push(user)
// }
// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
let filterUser = users.filter( user => user.id%2 === 0);
console.log(filterUser);
// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
let sortUser = users.sort( (a, b) => a.id > b.id ? 1 : -1);
console.log(sortUser);
// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
class Client {
    constructor(id, name, surname , email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order
    }
}
// створити пустий масив, наповнити його 10 об'єктами Client
let client1 = new Client(2, "Vitalina", 'Stratelyuk', 'Vita1@gmail.com', '06767676767', ['milk']);
let client2 = new Client(1, "Valentina", 'Stratelyuk', 'Val1@gmail.com', '06767676768', ['milk', 'bread']);
let client3 = new Client(4, "Elena", 'Stratelyuk', 'El1@gmail.com', '06767676769', ['milk', 'bread', 'eggs']);
let client4 = new Client(3, "Dmutro", 'Stratelyuk', 'Dmut1@gmail.com', '06767676761', ['milk', 'bread', 'meat']);
let client5 = new Client(6, "Oleksiy", 'Shevchenko', 'Olek1@gmail.com', '06767676762', ['milk', 'bread', 'eggs', 'fish']);
let client6 = new Client(5, "Vitaliy", 'Shevchenko', 'Vit1@gmail.com', '06767676763', ['milk', 'bread', 'eggs', 'fish', 'cucumber']);
let client7 = new Client(7, "Kate", 'Shevchenko', 'Kat1@gmail.com', '06767676764', ['milk', 'bread', 'eggs', 'fish', 'cucumber', 'tomato']);
let client8 = new Client(8, "Nastya", 'Shevchenko', 'Nast1@gmail.com', '06767676765', ['milk', 'bread', 'eggs', 'fish', 'cucumber', 'kinder']);
let client9 = new Client(9, "Maksim", 'Sushko', 'Maks1@gmail.com', '06767676766', ['milk', 'bread', 'eggs', 'fish', 'cucumber', 'tomato', 'cheese']);
let client10 = new Client(10, "Marta", 'Sushko', 'Mart1@gmail.com', '06767676713', ['milk', 'bread', 'eggs', 'fish', 'cucumber', 'tomato', 'cheese', 'salt']);
let clients = [client1, client2, client3, client4, client5, client6, client7, client8, client9, client10];
console.log(clients);
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
// let sortClient = clients.sort( (a, b) => a.order.length > b.order.length ? 1 : -1);
let sortClient = clients.sort( client => client.order.length);
// function byField(fieldName){
//     return (a, b) => a[fieldName] > b[fieldName] ? 1 : -1;
// }
console.log(sortClient);
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
function Cars (model, producer, year, maxSpeed, engineCapacity) {
    this.model = model;
    this.producer = producer;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.engineCapacity = engineCapacity
}
let car1 = {
    model: 'renault',
    producer : "France",
    year : 2015,
    maxSpeed : 200,
    engineCapacity : 1.2,
    drive() {
        console.log(`Їдемо зі швидкістю ${this.maxSpeed} m на годину`);
    },
    info() {
        console.log(`
        model: - ${this.model}, 
        producer: - ${this.producer}, 
        year: - ${this.year},
        maxSpeed: - ${this.maxSpeed},
        engineCapacity: - ${this.engineCapacity}`);
    },
    increaseMaxSpeed (newSpeed) {
         return this.maxSpeed = this.maxSpeed+newSpeed;
    },
    changeYear (newValue) {
        return this.year = newValue;
    }
    // addDriver (driver) {
    //      return driver  = {
    //         name : '',
    //         surname : ''
    //     }
    //}
}
car1.drive();
car1.info();
console.log(car1.increaseMaxSpeed(100));
car1.info();
console.log(car1.changeYear(2016));
car1.info();
// console.log(car1.addDriver('Olena', 'Stratelyuk'));

// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
class Car {

    constructor(model, producer, year, maxSpeed, engineCapacity) {
        this.model = model;
        this.producer = producer;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.engineCapacity = engineCapacity
    }
    drive() {
        console.log(`Їдемо зі швидкістю ${this.maxSpeed} m на годину`);
    };
    info() {
        console.log(`
        model: - ${this.model}, 
        producer: - ${this.producer}, 
        year: - ${this.year},
        maxSpeed: - ${this.maxSpeed},
        engineCapacity: - ${this.engineCapacity}`);
    };
    increaseMaxSpeed (newSpeed) {
        return this.maxSpeed = this.maxSpeed+newSpeed;
    };
    changeYear (newValue) {
        return this.year = newValue;
    };
    addDriver (driver) {
        return driver = {}
    }
}
 let car2 = new Car ('tesla', 'USA', 2017, 200, 2);
 console.log(car2);
 car2.drive();
car2.info();
console.log(car2.increaseMaxSpeed(100));
car2.info();
console.log(car2.changeYear(2021));
car2.info();
console.log(car2.addDriver({name: 'Olena', surname: 'Stratelyuk'}));

// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.

class Cinderella {
    constructor(name, age, sizeLeg) {
        this.name = name;
        this.age = age;
        this.sizeLeg = sizeLeg
    }
}
let cinderella1 = new Cinderella("Elena", 23, 35);
let cinderella2 = new Cinderella("Olena", 24, 36);
let cinderella3 = new Cinderella("Valentina", 25, 36);
let cinderella4 = new Cinderella("Anastasia", 26, 36);
let cinderella5 = new Cinderella("Tetyana", 27, 37);
let cinderella6 = new Cinderella("Eva", 28, 37);
let cinderella7 = new Cinderella("Emilia", 29, 37);
let cinderella8 = new Cinderella("Sonya", 30, 38);
let cinderella9 = new Cinderella("Dasha", 31, 38);
let cinderella10 = new Cinderella("Katya", 32, 38);
let cinderellas = [
    cinderella1,
    cinderella2,
    cinderella3,
    cinderella4,
    cinderella5,
    cinderella6,
    cinderella7,
    cinderella8,
    cinderella9,
    cinderella10];
console.log(cinderellas);
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
class Prince {
    constructor(name, age, sizeLeg) {
        this.name = name;
        this.age = age;
        this.sizeLeg = sizeLeg
    }
}
let prince = new Prince("Dmutro", 23, 35);
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
function findCinderella (array, ob) {
    for (let i = 0; i < array.length; i++) {
        if (array[i].sizeLeg === ob.sizeLeg ) {
            return array[i]
        }
    }
}
console.log (findCinderella(cinderellas, prince));
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
// не розумію чому певртає underfind  наче  return  вшито встрілкову функцію і умова вірна
let findMyCinderella = cinderellas.find(cinderella => {cinderella.sizeLeg === 35});
console.log(findMyCinderella)