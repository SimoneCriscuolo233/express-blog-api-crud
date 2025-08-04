const express = require('express')
const app = express()
const port = 3000

const posts = require('./data/posts.js')
const postsRouter = require('./routers/posts.js')
app.use(express.static('public'))

app.use('/posts', postsRouter)

app.get('/', (req, res) => {
  res.send('Server del mio blog')
})
app.get('/bacheca', (req, res) => {
  res.json(posts)
}

)
app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})
