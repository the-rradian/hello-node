const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.set('Content-Type', 'text/html')
    res.send(Buffer.from('<p>Hello World from node</p>'))
})

app.listen(port, () => {
  console.log(`Hello-node app listening on port ${port}`)
})