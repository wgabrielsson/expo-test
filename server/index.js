const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const app = express()
const port = 8080
/**
 * Applying middlewares used on every request.
 */
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

/**
 * Mongoose config
 */
mongoose.connect('mongodb://localhost:27017/local');
const userSchema = mongoose.Schema({
  firstName: {type: String},
  lastName: {type: String}
})
const User = mongoose.model('User', userSchema)

/**
 * Routing
 */
app.get('/', (request, response) => {
  response.status(200)
  response.send({message: 'Hello Layer10!'})
})
 
// ----- GET route ----- //
app.get('/users', (request, response) => {
  console.log('Got incoming request at /users with method GET.')
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
  // ----- POST route ----- //
app.post('/users', (request, response) => {
  console.log('Got incoming request at /users with method POST.')
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
 
/**
 * Init express app.
 */
app.listen(port, () => {
  console.log(`Server started. Listening on port ${port}...`)
})
