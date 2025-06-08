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
  let {id} = req.params;
  let {password: formpass , username: newUser} = req.body;
  let q = `SELECT * FROM user WHERE id = '${id}'`;
  try{
    connection.query(q,(err,result)=>{
      if(err) throw err;
      let user = result[0];
     if(formpass != user.password){
      resp.send("wrong password");
     }
      else{
        let q2 = `UPDATE user SET username = '${newUser}' WHERE id='${id}'`;
        connection.query(q2,(err,result)=>{
          if(err) throw err;
          resp.redirect("/users");
        });
      }
      
    });
  }catch(err){
    console.log(err);
    
    resp.send("some error occured");
  }
  
})

// add new user
app.get("/users/new",(req,resp)=>{
  resp.render("new.ejs");
})

app.post("/users", (req, resp) => {
    const { id, email, username, password } = req.body;
    const q = "INSERT INTO user (id, email, username, password) VALUES (?, ?, ?, ?)";
    connection.query(q, [id, email, username, password], (err, result) => {
        if (err) {
            console.log(err);
            return resp.send("Error adding user");
        }
        resp.redirect("/users");
    });
});

app.get("/user/:id/delete", (req, resp) => {
    const { id } = req.params;
    const q = "SELECT * FROM user WHERE id = ?";
    connection.query(q, [id], (err, result) => {
        if (err || !result[0]) return resp.send("User not found");
        resp.render("delete.ejs", { user: result[0] });
    });
});


app.delete("/user/:id", (req, resp) => {
    const { id } = req.params;
    const { email, password ,username } = req.body;
    const q = "SELECT * FROM user WHERE id = ?";
    connection.query(q, [id], (err, result) => {
        if (err) {
            console.log(err);
            return resp.send("Error finding user");
        }
        const user = result[0];
        if (!user) return resp.send("User not found");
        if (user.email !== email || user.password !== password || user.username !==username) {
            return resp.send("Email , password or username incorrect");
        }
        // Credentials correct, delete user
        const delQ = "DELETE FROM user WHERE id = ?";
        connection.query(delQ, [id], (err2, result2) => {
            if (err2) {
                console.log(err2);
                return resp.send("Error deleting user");
            }
            resp.redirect("/users");
        });
    });
});

app.listen(port,(req,resp)=>{
  console.log(`Server is listening to port ${port}`);
  
})



