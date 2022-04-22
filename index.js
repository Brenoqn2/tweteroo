import express from "express";
import cors from "cors";

const PORT = 5000;

let usuarios = [
  {
    username: "bobesponja",
    avatar:
      "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
  },
];
let tweets = [
  {
    username: "bobesponja",
    tweet: "eu amo o hub1",
  },
  {
    username: "bobesponja",
    tweet: "eu amo o hub2",
  },
  {
    username: "bobesponja",
    tweet: "eu amo o hub3",
  },
  {
    username: "bobesponja",
    tweet: "eu amo o hub4",
  },
  {
    username: "bobesponja",
    tweet: "eu amo o hub5",
  },
  {
    username: "bobesponja",
    tweet: "eu amo o hub6",
  },
  {
    username: "bobesponja",
    tweet: "eu amo o hub7",
  },
  {
    username: "bobesponja",
    tweet: "eu amo o hub8",
  },
  {
    username: "bobesponja",
    tweet: "eu amo o hub9",
  },
  {
    username: "bobesponja",
    tweet: "eu amo o hub10",
  },
  {
    username: "bobesponja",
    tweet: "eu amo o hub11",
  },
  {
    username: "bobesponja",
    tweet: "eu amo o hub12",
  },
  {
    username: "bobesponja",
    tweet: "eu amo o hub13",
  },
  {
    username: "bobesponja",
    tweet: "eu amo o hub14",
  },
  {
    username: "bobesponja",
    tweet: "eu amo o hub15",
  },
];

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

app.get("/tweets", (req, res) => {
  let lastTweets = [];
  for (let i = 0; i < tweets.length && i < 10; i++) {
    const tweet = tweets[tweets.length - 1 - i];
    const avatar = usuarios.find(
      (usuario) => usuario.username === tweet.username
    ).avatar;
    lastTweets.push({
      username: tweet.username,
      avatar: avatar,
      tweet: tweet.tweet,
    });
  }
  res.send(lastTweets);
});

app.listen(PORT);
