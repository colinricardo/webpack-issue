const express = require("express");
const app = express();
const port = 3001;

const _ = require("path").resolve(__dirname);
const indexFile = `${_}/index.html`;

app.get("/", (req, res) => res.send("Hello World!"));

app.get("/page", (req, res) => res.sendFile(indexFile));

require("path").resolve(__dirname, "..");

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
