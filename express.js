const express = require('express')
const path = require('path')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/', function(req, res){
   res.send("You just called the post method at '/hello'!\n");
});

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
