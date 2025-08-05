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
  const newID = posts[posts.length - 1].id + 1;
  const { title, content, image, tags } = req.body
  const newPost = {
    id: newID,
    title,
    content,
    image,
    tags
  }
  posts.push(newPost)

  res.status(201).json(newPost)

}
const update = (req, res) => {
  const postId = parseInt(req.params.id);
  const post = posts.find(elem => elem.id === postId);
  const { title, content, image, tags } = req.body
  if (!post) {
    return res.status(404).json({ error: "Not Found", message: "Post non trovato" })
  }

  post.title = title
  post.content = content
  post.image = image
  post.tags = tags
  res.send(post)

}
const modify = (req, res) => {

  const postId = parseInt(req.params.id);
  const post = posts.find(elem => elem.id === postId);
  if (!post) {
    return res.status(404).json({ error: "Not Found", message: "Post non trovato" })
  }

  post.title = req.body.title
  res.send(post)
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