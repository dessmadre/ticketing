import request from 'supertest';
import { app } from '../../app';

it('fails when a email that does not exist is supplied', async () => {
  request(app)
    .post('/api/users/signin')
    .send({
      email: 'jdope@test.com',
      password: '123456',
    })
    .expect(400);
});

it('fails when an incorrect credentials are supplied', async () => {
  await request(app)
    .post('/api/users/signup')
    .send({
      email: 'jdope@test.com',
      password: '123456',
    })
    .expect(201);

  await request(app)
    .post('/api/users/signin')
    .send({
      email: 'jdope@test.com',
      password: '1234562',
    })
    .expect(400);
});

it('responds with a cookie when valid credentials are set', async () => {
  await request(app)
    .post('/api/users/signup')
    .send({
      email: 'jdope@test.com',
      password: '123456',
    })
    .expect(201);

  const response = await request(app)
    .post('/api/users/signin')
    .send({
      email: 'jdope@test.com',
      password: '123456',
    })
    .expect(200);

  expect(response.get('Set-Cookie')).toBeDefined();
});
