const express = require("express");

const graphqlHTTP = require("express-graphql");
const schema = require("./schema/schema");

const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const port = 4000;

//Allow Cross-Origin Requests
app.use(cors());

//  Connect to MLab Database
// Make sure to replace my db string & creds with your own
mongoose.connect(
  "mongodb+srv://sagarsharma4244:purnima-9236727082@cluster0-4psab.mongodb.net/test?retryWrites=true&w=majority",
  {useNewUrlParser: true}
);
var db = mongoose.connection;
db.on("error", console.error.bind(console, "Connection ERRor:"));
db.once("open", () => {
  console.log("Connected To database");
});

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true
  })
);
app.get("/", (req, res) => res.send("Hesdgwesgdllo World!"));

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port} `);
});
