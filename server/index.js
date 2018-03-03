const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const app = express()
const port = 8080

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

mongoose.connect('mongodb://localhost:27017/local');

const userSchema = mongoose.Schema({
  firstName: {type: String},
  lastName: {type: String}
})

const User = mongoose.model('User', userSchema)

app.get('/', (request, response) => {
  response.status(200)
  response.send({message: 'Hello Layer10!'})
})
 
app.get('/users', (request, response) => {
  User.find((err, users) => {
    if(err) {
      console.log('Error: ', err)
      response.status(500)
      response.send({message: 'Server error: ' + err})
    } else {
      response.status(200)
      response.send(users)
    }
  })
})

app.post('/users', (request, response) => {
  const { firstName, lastName } = request.body
  if (!firstName || ! lastName) {
    response.status(404)
    response.send({message: 'Missing body params'})
  }
  else {
    const user = new User({firstName, lastName})
    user.save()
    response.status(200)
    response.send({createdUser: {firstName, lastName}})
  }
})
 

app.listen(port, () => {
  console.log(`Server started, listening on port ${port}`)
})
