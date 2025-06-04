const { faker } = require('@faker-js/faker');

const getRandomUser = () => {
  return {
    id: faker.string.uuid(),
    username: faker.internet.username(),  
    email: faker.internet.email(),
    password: faker.internet.password(),
  };
}

console.log(getRandomUser());

