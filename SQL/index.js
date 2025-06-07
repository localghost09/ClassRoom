const { faker } = require('@faker-js/faker');
const mysql = require('mysql2');
const express = require('express');
const app = express();
const path = require("path");
const methodOverride = require("method-override");

app.use(methodOverride("_method"));
app.use(express.urlencoded({extended: true}));

const port = 8080;

app.set("view engine","ejs");
app.set("views", path.join(__dirname,"/views"));


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
  let count = result[0]["count(*)"];
  resp.render("home.ejs",{count});
});
}catch(err){
  console.log(err);
  resp.send("some error in DB");
  
}
  
});

// user route
app.get("/users",(req,resp)=>{
  let q = `SELECT * FROM user`;
  try{
    connection.query(q,(err,users)=>{
      if(err) throw err;
     
      resp.render("users.ejs",{users});
      
    });
  }catch(err){
    resp.send("some error occured");
  }
});

app.get("/user/:id/edit",(req,resp)=>{
  let {id} = req.params;
  let q = `SELECT * FROM user WHERE id = '${id}'`;
  try{
    connection.query(q,(err,result)=>{
      if(err) throw err;
     let user = result[0];
      resp.render("edit.ejs",{user});
      
    });
  }catch(err){
    resp.send("some error occured");
  }
})

//Update route
app.patch("/user/:id",(req,resp)=>{
  resp.send("updated succesfully");
  
})
app.listen(port,(req,resp)=>{
  console.log(`Server is listening to port ${port}`);
  
})



