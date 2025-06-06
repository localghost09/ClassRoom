const { faker } = require('@faker-js/faker');
const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'test',
  password:'MERNSTACK'
});

const getRandomUser = () => {
  return {
    id: faker.string.uuid(),
    username: faker.internet.username(),  
    email: faker.internet.email(),
    password: faker.internet.password(),
  };
}

console.log(getRandomUser());

