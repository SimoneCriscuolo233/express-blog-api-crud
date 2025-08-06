const notFound = ((req, res, next) => {
  res.status(404).jason({
    error: "404 Not Found",
    message: "Pagina non trovata"
  })
})

module.exports = notFound