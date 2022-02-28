const express = require('express')
const app = express()
const port = 8080

let num=0

const authenticated = (req, res, next) => {
    next()
}


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/api/re',(req, res) => {
    res.send({num: num})
    num=0
})

app.post('/api/int',async (req,res) => {
    num++
    res.send({num: num})
})

app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})
