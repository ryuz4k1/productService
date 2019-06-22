"use strict";
// ... Env file config
require("dotenv").config();

const App = require("./src/app");
const app = new App().getApp();

app.listen(process.env.PORT, () => {
    console.log("Server is running on port: %d", process.env.PORT);
});
