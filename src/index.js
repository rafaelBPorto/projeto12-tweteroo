import express from 'express'
import cors from 'cors'

const app = express();
app.use(express.json());
app.use(cors());

const users = [];
const tweets = [];

app.post('/sign-up', (req, res) => {

    if (!req.body.username || !req.body.avatar) {
        res.status(400).send("Todos os campos são obrigatórios!");
    }
    users.push(req.body);
    res.send("OK");

})

app.get('/sign-up', (req, res) => {
    res.send(users)
})

app.post('/tweets', (req, res) => {
    if (!req.body.tweet) {
        res.status(400).send("Todos os campos são obrigatórios!");
    }
    tweets.push(req.body);
    res.status(201).send("OK");
})

app.get('/tweets', (req, res) => {
    const response = [];
    const lastTweet = tweets.length - 1;
    const stopTweet = lastTweet - 10;

    if (tweets.length > 0) {
        for (let i = lastTweet, k = 0; i > stopTweet && i >=0; i--, k++) {
            const positionUser = users.findIndex(element => tweets[i].username === element.username);
            response.push(tweets[i]);
            if (positionUser > -1) {
                const avatar = users[positionUser].avatar;
                response[k].avatar = avatar;
            } else {
                response[k].avatar = "";
            }
        }
    }

    res.send(response);
});

app.listen(5000)