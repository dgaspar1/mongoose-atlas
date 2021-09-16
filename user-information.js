require('dotenv').config()

const dbUser = {
    login: process.env.DB_USER,
    password: process.env.DB_PASSWORD
};

export { dbUser };