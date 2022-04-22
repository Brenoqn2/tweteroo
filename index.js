import express from "express";
import cors from "cors";

const PORT = 5000;

let usuarios = [];
let tweets = [];

const app = express();
app.use(cors());
app.use(express.json());

app.post("/sign-up", (req, res) => {
  usuarios.push(req.body);
  res.send("OK");
});

app.post("/tweets", (req, res) => {
  tweets.push(req.body);
  res.send("OK");
});

app.listen(PORT);
