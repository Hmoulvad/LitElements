const express = require('express');
const path = require("path");
const favicon = require("express-favicon");
const port = process.env.PORT || 3000;
const app = express();

app.use(favicon(__dirname + "/dist/favicon.ico"));
app.use(express.static(__dirname + "/dist"));
app.use(express.static(path.join(__dirname, 'dist')));

app.get("/*", function(req, res) {
    res.sendFile(path.join(__dirname, "dist", "index.html"));
});

app.listen(port, () => console.log(`Application running on port: ${port}.`));