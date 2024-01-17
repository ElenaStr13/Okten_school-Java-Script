//зробити файл index.html
//з ендпоінту http://jsonplaceholder.typicode.com/users отримати всіх користувачів
//вивести їх id + name списком та додати посилання з href = post-details.html?id=XXX
// (замість ХХХ - айді юзера)


let url = new URL('http://jsonplaceholder.typicode.com/users');
fetch(url)
    .then(response => response.json())
    .then(users => {
        let ul = document.createElement('ul');
        for (const user of users) {
            let li = document.createElement('li');
            let a = document.createElement('a');
            a.innerText = user.id + user.name;
            a.href = 'users.html?xxx=' + JSON.stringify(user);
            li.appendChild(a);
            ul.appendChild(li);
        }
        document.body.append(ul);

    });

