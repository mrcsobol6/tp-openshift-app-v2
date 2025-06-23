const express = require("express")
const dotenv = require("dotenv")
dotenv.config()
const app = express()
const fs = require("fs")

const PORT = process.env.PORT || 3000

app.use(express.json())

app.get("/", (req, res) => {
    console.log("GET on /...")
    res.send("Hello world!")
})

app.get("/comments", (req, res) => {
    fs.readFile("comments.txt", (err, data) => {
        if (err) throw err
        res.send(data.toString())
    })
})

app.post("/comments", (req, res) => {
    const { body } = req
    const message = body.message
    fs.appendFile("comments.txt", `${message}\n`, err => {
        if (err) throw err;
        res.send('Added to file')
    }); 

})

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`)
})