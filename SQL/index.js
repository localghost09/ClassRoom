const { faker } = require('@faker-js/faker');
const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'delta_app',
  password:'MERNSTACK',
});

//Inserting New Data
let q = "INSERT INTO user (id, username, email, password) VALUES (? , ? , ?, ?)";
let user = ["123", "123_newuser", "abcd@gamil.com", "abcde"]



try{
connection.query(q,user, (err,result)=>{
  if(err) throw err;
  console.log(result);
  
});
}catch(err){
  console.log(err);
  
}
connection.end();

const getRandomUser = () => {
  return {
    id: faker.string.uuid(),
    username: faker.internet.username(),  
    email: faker.internet.email(),
    password: faker.internet.password(),
  };
}




