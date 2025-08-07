const express = require('express')
const app = express()
const port = 3000

const posts = require('./data/posts.js')
const postsRouter = require('./routers/posts.js')
const errorsHandler = require('./middlewares/errorsHandler.js')
const notFound = require('./middlewares/notFound.js')

app.use(express.static('public'))
app.use(express.json())

app.use('/posts', postsRouter)

app.get('/', (req, res) => {
  res.send('Server del mio blog')
})
app.get('/bacheca', (req, res) => {
  res.json(posts)
})

app.use(errorsHandler)
app.use(notFound)
app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})
