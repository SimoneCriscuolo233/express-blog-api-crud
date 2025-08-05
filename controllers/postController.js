const posts = require('../data/posts.js')

const index = (req, res) => {
  const tags = req.query.tags
  let filteredPost = posts
  if (tags) {
    filteredPost = posts.filter(item => {
      return item.tags.map(t => t.toLowerCase()).includes(tags.toLowerCase())
    });
  }
  res.json(filteredPost)
}

const show = (req, res) => {
  const postId = parseInt(req.params.id);
  const post = posts.find(elem => elem.id === postId);
  if (!post) {
    return res.status(404).json({ error: "Not Found", message: "Post non trovato" })
  }
  res.json(post)

}
const store = (req, res) => {
  console.log(req.body)
  res.send(`Creazione nuovo post`)

}
const update = (req, res) => {
  res.send(`Modifica totale del post con id ${req.params.id}`)
}
const modify = (req, res) => {
  res.send(`Modifica parziale del post con id ${req.params.id}`)
}
const destroy = (req, res) => {
  const postId = parseInt(req.params.id);
  const post = posts.find(elem => elem.id === postId);
  if (!post) {
    return res.status(404).json({ error: "Not Found", message: "Post non trovato" })
  }
  posts.splice(posts.indexOf(post), 1)
  console.log(posts)
  res.sendStatus(204)
}
module.exports = {
  index,
  show,
  store,
  update,
  modify,
  destroy
}