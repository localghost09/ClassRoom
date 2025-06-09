const mongoose = require("mongoose");


main()
.then(()=>{
    console.log("connection succesfull");
    
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');

}

const userSchema = new mongoose.Schema({
    name:String,
    email:String,
    age: Number,

});

const User = mongoose.model("User", userSchema);
// const Employee = mongoose.model("Employee", userSchema);

// const user1 = new User({name: "Adam", email:"nikhilprataps@gmail.com", age:23});
// const user2 = new User({name:"raju", email:"rajpal0844@gmai.com", age:22});
// const user3 = new User({name:"nikhil", email:"ghost@gmai.com", age:32});

// user1.save();
// user3.save().then((res)=>{
//     console.log(res);
    
// })
// .catch((err)=>{
//     console.log(err);
    
// })

// insert Many

// User.insertMany([
//     {name:"sahil", email:"sahil0123@gmail.com", age:23},
//     {name:"shubham" , email: "shubham@gmail.com", age:23},
//     {name:"paras", email:"parase123@gmail.com", age:21},
// ]).then((res)=>{
//     console.log(res);
    
// })


User.find({age : {$gt : 20}})
.then((res)=>{
    console.log(res);
    
}).catch((err)=>{
    console.log(err);
    
})