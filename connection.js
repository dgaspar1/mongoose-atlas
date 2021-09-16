const mongoose = require("mongoose");

const dbUser = {
    login: 'dgaspar-teste',
    password: 'aJ1FCuQkGyoPStvX'
}

const uri = `mongodb+srv://${dbUser.login}:${dbUser.password}@cluster0.4c6g2.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

mongoose.connect(uri);

const connection = mongoose.connection;

connection.once("open", function () {
    console.log("MongoDB database connection established successfully");
});

export connection;