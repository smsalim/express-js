const express = require('express')
const path = require('path')
const app = express()
const port = 3000

app.use(express.static(path.join(__dirname, 'public')))

app.get('/hello/:name', (req, res) => {
  res.send('Hello World! ' + req.params.name)
})

app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'))
})

app.get('/json', (req, res)=> {
  res.json({
    name: 'Jason',
    age: 25,
    city: 'New York'
  })
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
