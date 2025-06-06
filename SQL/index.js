const { faker } = require('@faker-js/faker');
const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'delta_app',
  password:'MERNSTACK',
});


const getRandomUser = () => {
  return [
    faker.string.uuid(),
    faker.internet.username(),  
    faker.internet.email(),
    faker.internet.password(),
  ];
}
//Inserting New Data
let q = "INSERT INTO user (id, username, email, password) VALUES ?"; // for multiple we only use ?
//let user = ["123", "123_newuser", "abcd@gamil.com", "abcde"]

let data = [];
for(let i=1; i<=100; i++){
  data.push(getRandomUser());
}


try{
connection.query(q,[data], (err,result)=>{
  if(err) throw err;
  console.log(result);
  
});
}catch(err){
  console.log(err);
  
}
connection.end();





