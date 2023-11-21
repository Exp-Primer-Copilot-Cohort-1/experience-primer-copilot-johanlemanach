// Create web server
// Load modules
var express = require("express");
var bodyParser = require("body-parser");
var app = express();
var fs = require("fs");
var path = require("path");
var commentsFile = path.join(__dirname, "comments.json");

// Set port
app.set("port", process.env.PORT || 3000);

// Set static files
app.use("/", express.static(__dirname + "/../app"));

// Set body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Get comments
app.get("/api/comments", function(req, res) {
  fs.readFile(commentsFile, function(err, data) {
    if (err) {
      console.error(err);
      process.exit(1);
    }
    res.json(JSON.parse(data));
  });
});

// Post comments
app.post("/api/comments", function(req, res) {
  fs.readFile(commentsFile, function(err, data) {
    if (err) {
      console.error(err);
      process.exit(1);
    }
    var comments = JSON.parse(data);
    var newComment = {
      id: Date.now(),