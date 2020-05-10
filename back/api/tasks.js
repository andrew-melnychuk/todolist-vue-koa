const db = require('../module.js');

// exports.addTask = ({ name, description }) => new Promise(async (resolve, reject) => {
//     try {
//         resolve({
//             "name": name,
//             "descritption": description,
//             "date": "30.04.2020"
//         });
//     }
//     catch (err) {
//         reject(err);
//     }
// })
exports.login = ({ username, password }) => new Promise(async (resolve, reject) => {
    try {
        let user = db.users[username];
        if (user) {
            // let user = db.users.findIndex(item => item.username == username);
            if (db.users[username].password == password) {
                resolve({
                    "WebAPIToken": "LoNgSTRingTokEnWiTHusErseSSiOn"
                });
            }
        } else yield
    }
    catch (err) {
        reject(err);
    }
})
exports.logout = () => new Promise(async resolve => {
    resolve({
        "message": "User logged out"
    })
})
exports.register = ({ username, password }) => new Promise(async resolve => {
    let user = {
        "id": Date.now().toString(),
        "username": username,
        "password": password,
        "tasks": []
    };
    db.users[username] = user;
    // db.users.push(user);
    resolve(user);
})
exports.getTasks = () => new Promise(async resolve => {
    resolve(db.tasks != [] ? db.tasks : 'kek')
})
exports.postTask = ({ WebAPIToken, name, description, date }) => new Promise(async (resolve, reject) => {
    try {
        if (WebAPIToken != '') {
            let task = {
                name: name,
                description: description,
                task_id: Date.now().toString(),
                date: date
            }
            db.tasks.push(task);
            resolve(task);
        }
    }
    catch (err) {
        reject(err);
    }
})
exports.deleteTask = ({ WebAPIToken, task_id }) => new Promise(async (resolve) => {
    if (WebAPIToken != '') {
        let ind = db.tasks.findIndex(item => item.task_id == task_id);
        db.tasks.splice(ind, 1);
        resolve({
            "message": "task was deleted"
        })
    }
})

exports.getUsers = () => new Promise(async (resolve) => {
    let usersList = db.users;
    resolve(usersList);
})