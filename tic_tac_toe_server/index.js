const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

let history = [
  {
    "id": 1,
    "playerX": "John",
    "playerO": "Jane",
    "winner": "Jane",
    "date": "2022-04-23T18:25:43.511Z"
  },
  {
    "id": 2,
    "playerX": "Ville",
    "playerO": "Kalle",
    "winner": "tie",
    "date": "2023-06-29T18:25:43.511Z"
  }
];

app.get('/api/history', (request, response) => {
  response.json(history);
})

app.post('/api/history', (request, response) => {
  let body = request.body;

  if(!body.playerX | !body.playerO | !body.winner) {
    return response.status(400).json({
      error: 'player and winner data must be provided'
    })
  }

  if (!body.date){
    body = {...body, date: new Date().toJSON()};
  }

  const id = history.length + 1;
  const obj = {...body, id};

  history = history.concat(obj);
  response.json(obj);
})

const unknownEndpoint = (request, response) => {
  response.status(404).send({error: 'unkown endpoint'});
}

app.use(unknownEndpoint);

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server runninr on port ${PORT}`);
});
