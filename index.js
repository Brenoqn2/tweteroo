import express from "express";
import cors from "cors";

const PORT = 5000;

let usuarios = [];
let tweets = [];

const app = express();
app.use(cors());

app.post("/sign-up", (req, res) => {
  const username = req.body.username;
  const avatar = req.body.avatar;
  const usuario = { username: username, avatar: avatar };
  usuarios.push(usuario);
  res.send("OK");
});

app.listen(PORT);
