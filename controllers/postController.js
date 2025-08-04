const posts = require('../data/posts.js')

const index = (req, res) => {
  res.json(posts)
}
const show = (req, res) => {
  const postId = parseInt(req.params.id);
  const post = posts.find(elem => elem.id === postId);
  res.json(post)

}
const store = (req, res) => {
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