const mongoose = require("mongoose");
const chat = require('./models/chat.js');

main().then(()=>{
    console.log("connection successful");
})
.catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');

}

let allchats = ([
    {
        from : "kannu",
        to : "nikhil",
        msg : "hey nikhil i love you",
        created_at : new Date()
    },
    {
        from : "Aditi",
        to : "manshu",
        msg : "could you send me exam datesheet",
        created_at : new Date()
    },
    {
        from : "Rajpal",
        to : "Shubham",
        msg : "fuck yu ",
        created_at : new Date()
    }
]);

chat.insertMany(allchats);