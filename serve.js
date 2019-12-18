const express = require('express');
const { join } = require('path');
const favicon = require("express-favicon");

const app = express();
const port = 3000;
app.use(favicon(__dirname + "/public/favicon.ico"));
app.use(express.static(join(__dirname, 'public')));
app.use(express.static('./dist'));

app.get("/*", function(req, res) {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(port, () => console.log(`App running on ${port}.`));