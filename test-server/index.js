const express = require("express");
const app = express();
const port = 5004;

const _ = require("path").resolve(__dirname, "..");
const buildJsfile = `${_}/build/static/js/bundle.min.js`;
const loaderJsFile = `${_}/test-server/loader.js`;

console.log(buildJsfile);

app.get("/", (req, res) => res.send("Hello World!"));

app.get("/js", (req, res) => {
  return res.sendFile(buildJsfile);
});

app.get("/loader", (req, res) => {
  return res.sendFile(loaderJsFile);
});

require("path").resolve(__dirname, "..");

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
