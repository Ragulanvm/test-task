const express = require ("express");
const router = require("./route")

const app = express();

app.use(express.json());
app.use(express.urlencoded());

app.use("/", async(req, res) => {
    console.log("Server running fine")
    res.send("Server running successfully")
})

app.use("/user", router);

module.exports = app;
ß