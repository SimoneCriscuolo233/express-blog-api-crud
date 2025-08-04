const express = require('express')
const posts = require('../data/posts.js')
const router = express.Router()

router.get('/', (req, res) => {
  res.send('lista post')
})

router.get('/:id', (req, res) => {
  res.send(`dettaglio post con id ${req.params.id}`)
})


router.post('/', (req, res) => {
  res.send(`Creazione nuovo post`)
})

router.put('/:id', (req, res) => {
  res.send(`Modifica totale del post con id ${req.params.id}`)
})
router.patch('/:id', (req, res) => {
  res.send(`Modifica parziale del post con id ${req.params.id}`)
})
router.delete('/:id', (req, res) => {
  res.send(`Cancellazione del post con id ${req.params.id}`)
})
module.exports = router;

