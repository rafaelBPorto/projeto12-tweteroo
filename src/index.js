import express from 'express'
import cors from 'cors'

const app = express()
app.use(express.json())
app.use(cors())

const users = [
    {
        username: 'bobesponja',
        avatar: "https://img.elo7.com.br/product/original/3254FDB/bob-esponja-e-patrick-em-camadas-arquivo-de-corte-personalizados-bob-esponja-e-patrick.jpg"
    },
    {
        username: 'patrick',
        avatar: "http://s2.glbimg.com/nCXjcf8JWf3LtDMLvB_Ele-giGo=/290x386/s2.glbimg.com/8UQomHbV_oPsS2XIr9oou8MTJSk=/s.glbimg.com/jo/g1/f/original/2013/07/06/patrick_1.jpg"
    }
]

const tweets = [
    {
        username: "b",
        tweet: "1"
    },
    {
        username: "patrick",
        tweet: "2"
    },
    {
        username: "patrick",
        tweet: "3"
    },
    {
        username: "patrick",
        tweet: "4"
    },
    {
        username: "patrick",
        tweet: "5"
    },
    {
        username: "patrick",
        tweet: "6"
    },
    {
        username: "patrick",
        tweet: "7"
    },
    {
        username: "patrick",
        tweet: "8"
    },
    {
        username: "patrick",
        tweet: "9"
    },
    {
        username: "patrick",
        tweet: "10"
    },
    {
        username: "patrick",
        tweet: "11"
    },
    {
        username: "patrick",
        tweet: "12"
    },
    {
        username: "patrick",
        tweet: "13"
    }
]

app.post('/sign-up', (req, res) => {
    users.push(req.body)
    res.send(tweets)

})

app.get('/tweets', (req, res) => {
    const response = []
    const lastTweet = tweets.length-1 
    const stopTweet = lastTweet - 10
    

    for (let i = lastTweet, k=0; i > stopTweet; i--, k++) {
        console.log(i)
        const positionUser = users.findIndex(element=>tweets[i].username === element.username)
        response.push(tweets[i])
        if( positionUser > -1){
            const avatar = users[positionUser].avatar
            response[k].avatar = avatar        
        }else{
            response[k].avatar = ""
        }

    }

    console.log(response)
    res.send(response)
});


app.listen(5000)