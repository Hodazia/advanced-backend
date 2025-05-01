const express = require("express");

const {PORT} = require('./config');
const apiRoutes = require("./routes")
const app = express();

const {ServerConfig, Logger } = require("./config")

/*there can be two types of routes

- one like api driven
- another one could '/home' route 


*/

app.use('/api', apiRoutes)
app.listen(ServerConfig.PORT, () => {
    console.log(`listened to the port ${ServerConfig.PORT}`);
    //Logger.info("Successfully started the server")
})