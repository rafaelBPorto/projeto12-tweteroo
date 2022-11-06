import express from 'express'
import cors from 'cors'

const app = express()
app.use(express.json())
app.use(cors())

const users = [
    // {
    //     username: 'bobesponja',
    //     avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info"
    // }
]

const tweets =[]

app.post('/sign-up', (req, res) => {
    users.push(req.body)
    res.send("OK")

})

app.listen(5000)