
const unknownEndpoint = (request, response) => {
  response.status(404).send({error: 'unkown endpoint'});
}

module.exports = {
  unknownEndpoint
}