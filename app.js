const express = require('express');
const app = express();

const port = 4001;

app.listen(port, function () {
    console.log('Server is running on Port: ' + port);

    const mongoose = require("mongoose");

    const dbUser = {
        login: 'dgaspar-teste',
        password: 'aJ1FCuQkGyoPStvX'
    }

    const uri = `mongodb+srv://${dbUser.login}:${dbUser.password}@cluster0.4c6g2.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

    async function main() {
        await mongoose.connect(uri);
    }

    main().catch(err => console.log(err));
});
