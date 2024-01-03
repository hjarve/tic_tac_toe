const historyRouter = require('express').Router();

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

historyRouter.get('/', (request, response) => {
  response.json(history);
});

historyRouter.post('/', (request, response) => {
  let body = request.body;

  if(!body.playerX | !body.playerO | !body.winner) {
    return response.status(400).json({
      error: 'player and winner data must be provided'
    });
  };

  if (!body.date){
    body = {...body, date: new Date().toJSON()};
  };

  const id = history.length + 1;
  const obj = {...body, id};

  history = history.concat(obj);
  response.json(obj);
});

module.exports = historyRouter;
