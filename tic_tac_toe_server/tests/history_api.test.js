const supertest = require('supertest');
const app = require('../app');

const api = supertest(app);

const url = '/api/history'

describe('History api', () => {
  test('History is returned as json', async () => {
    await api
      .get(url)
      .expect(200)
      .expect('Content-Type', /application\/json/);
  });

  test('GET returns an array with length of 2', async () => {
    const response = await api.get(url);

    expect(response.body).toHaveLength(2);
  });

  test('First object in history array has all the properties', async () => {
    const response = await api.get(url);

    expect(response.body[0].playerX).toBe('John');
    expect(response.body[0].playerO).toBe('Jane');
    expect(response.body[0].winner).toBe('Jane');
    expect(response.body[0].date).toBe('2022-04-23T18:25:43.511Z');
  })

  test('A new object can be added to the history array', async () => {
    const newObject = {
      playerX: 'xxx',
      playerO: 'ooo',
      winner: 'tie',
      date: '2022-03-23T18:25:43.511Z'
    };

    await api
      .post(url)
      .send(newObject)
      .expect(201)
      .expect('Content-Type', /application\/json/);

    const response = await api.get(url);

    expect(response.body).toHaveLength(3);
    expect(response.body[2].playerX).toBe('xxx');
    expect(response.body[2].playerO).toBe('ooo');
    expect(response.body[2].winner).toBe('tie');
    expect(response.body[2].date).toBe('2022-03-23T18:25:43.511Z');
  })

  test('If an object is sent without a date, the date property is added to the object', async () => {
    const newObject = {
      playerX: 'xxx',
      playerO: 'ooo',
      winner: 'tie'
    };

    await api
      .post(url)
      .send(newObject)
      .expect(201)
      .expect('Content-Type', /application\/json/);

    const response = await api.get(url);

    expect(response.body).toHaveLength(4);

    expect(response.body[3]).toHaveProperty('date');
  });

  test('When an object is added, it is returned with an id', async () => {
    const newObject = {
      playerX: 'xxx',
      playerO: 'ooo',
      winner: 'tie'
    };

    const response = await api.post(url).send(newObject);

    expect(response.body).toHaveProperty('id');
  })

  describe('An object is not added', () => {
    test('when a player data is missing', async () => {
      const newObject = {
        playerO: 'ooo',
        winner: 'tie'
      };

      await api
        .post(url)
        .send(newObject)
        .expect(400);

      const response = await api.get(url);

      expect(response.body).toHaveLength(5);
    });

    test('when a winner data is missing', async () => {
      const newObject = {
        playerX: 'xxx',
        playerO: 'ooo',
      };

      await api
        .post(url)
        .send(newObject)
        .expect(400);

      const response = await api.get(url);

      expect(response.body).toHaveLength(5);
    });
  });
});
