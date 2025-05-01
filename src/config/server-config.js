const dotenv = require("dotenv")

// u can get the environment variables in it,
dotenv.config();

module.exports = {
    PORT: process.env.PORT, 
}
