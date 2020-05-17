//读数据库
const fs = require("fs");
const usersString = fs.readFileSync("./db/users.json").toString();
const usersArray = JSON.parse(usersString);

console.log(usersArray);
//写数据库
const users3 = { id: 3, name: "tom", password: "yyyyyy", age: 18 };
usersArray.push(users3);
const string = JSON.stringify(usersArray);
fs.writeFileSync("./db/users.json", string);
