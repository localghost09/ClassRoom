const { faker } = require('@faker-js/faker');
const mysql = require('mysql2');
const express = require('express');
const app = express();

const port = 8080;


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



// try{
// connection.query(q,[data], (err,result)=>{
//   if(err) throw err;
//   console.log(result);
  
// });
// }catch(err){
//   console.log(err);
  
// }
// connection.end();

app.get("/",(req,resp)=>{
  let q = `SELECT count(*) FROM user`;
  try{
connection.query(q, (err,result)=>{
  if(err) throw err;
  console.log(result);
  resp.send(result);
});
}catch(err){
  console.log(err);
  resp.send("some error in DB");
  
}
  
});

app.listen(port,(req,resp)=>{
  console.log(`Server is listening to port ${port}`);
  
})



