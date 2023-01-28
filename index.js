// TODO: Present user with a landing page with a link to a notes page

// TODO: When link is selected present user with a page with existing notes listed in the left-hand column, plus empty fields to enter a new note title and the note’s text in the right-hand column

// TODO: When user enters a new note title and the note’s text a Save icon appears in the navigation at the top of the page

// TODO: When user clicks on the Save icon the new note they entered is saved and appears in the left-hand column with the other existing notes

// TODO: When user clicks on an existing note in the list in the left-hand column that note appears in the right-hand column

// TODO: When user clicks on the Write icon in the navigation at the top of the page they are presented with empty fields to enter a new note title and the note’s text in the right-hand column

const express = require("express");
const app = express();
const path = require("path");
const fs = require("fs");

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./views/index.html"));
});

// TODO: `GET /notes` should return the `notes.html` file.
app.get("/notes", (req, res) => {
  fs.readFile("./notes.json", "utf-8", (err, data) => {
    if (err) {
      res.status(500).send("Server error");
      throw err;
    } else {
      const notesData = JSOON.parse(data);
      res.json(notesData);
      return "./public/assets/notes.html";
    }
  });
});
// TODO: `GET *` should return the `index.html` file.
// TODO: `GET /api/notes` should read the `db.json` file and return all saved notes as JSON.
// TODO: `POST /api/notes` should receive a new note to save on the request body, add it to the `db.json` file, and then return the new note to the client. * You'll need to find a way to give each note a unique id when it's saved (look into npm packages that could do this for you).

app.listen(3000, function () {
  console.log("Listening on port 3000");
});
