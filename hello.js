const express = require('express')
const app = express()
const port = 3000

app.get('/', function (req, res, next) {
    var options = {
      root: '.',
      dotfiles: 'deny',
      headers: {
        'x-timestamp': Date.now(),
        'x-sent': true
      }
    }
  
    var fileName = './helloPage.html'
    res.sendFile(fileName, options, function (err) {
      if (err) {
        next(err)
      } else {
        console.log('Sent:', fileName)
      }
    })
  })

app.listen(port, () => {
  console.log(`Hello-node app listening on port ${port}`)
})