const express = require("express");
const dotenv = require("dotenv");
const books = require("./books");
const logger = require("./middlewares/books.logger");
const router = require("./routes/booksRoute");

dotenv.config();
const app = express();

//middleware
app.use(logger);
app.use(express.json());

//route
app.get("/", (req, res) => {
  res.send("<h1>Welcome to our library stockpile</h1>");
});

//get all results
app.get("/books", (req, res) => {
  res.json(books);
});

const PORT = process.env.PORT || 9000;

app.listen(PORT, () => {
  console.log(`server running on ${PORT}`);
});
