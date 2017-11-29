const request = require('supertest');
const server = require('../index');
const User = require('../models/user');
const ERRORS = require('../constants').ERRORS;

const seedUser = {
  email: 'purslane@houseofsuns.com',
  password: 'hesperus',
  name: {
    first: 'Abigail',
    last: 'Gentian',
  },
};

const validRegistration = {
  email: 'spider@conjoiners.com',
  password: 'remontoire',
  name: {
    first: 'Nevil',
    last: 'Clavain',
  },
};

describe('User tests', () => {
  beforeAll(async () => {
    await new User(seedUser).save();
  });

  it('should not allow a user to register with missing information', async () => {
    const fields = Object.keys(validRegistration);

    fields.forEach(async (field) => {
      const invalidRegistration = Object.assign({}, validRegistration);
      delete invalidRegistration[field];

      const result = await request(server).post('/user/register').send(invalidRegistration);
      result.expect(422);
    });
  });

  it('should not allow a user to register with a password fewer than 8 characters long', () => {
    const invalidRegistration = Object.assign({}, validRegistration, { password: 'campion' });
    return request(server).post('/user/register')
      .send(invalidRegistration)
      .expect(422)
      .expect({ errors: [{ error: ERRORS.PASSWORD_TOO_SHORT }] });
  });

  it('should not allow a user to register with a bad email address', () => {
    const invalidRegistration = Object.assign({}, validRegistration, { email: 'cadance cascade' });
    return request(server).post('/user/register')
      .send(invalidRegistration)
      .expect(422)
      .expect({ errors: [{ error: ERRORS.INVALID_EMAIL }] });
  });

  it('should not allow a user to register with a duplicate email address', () => {
    const invalidRegistration = Object.assign({}, validRegistration, { email: seedUser.email });
    return request(server).post('/user/register')
      .send(invalidRegistration)
      .expect(422)
      .expect({ errors: [{ error: ERRORS.ALREADY_REGISTERED }] });
  });

  it('should allow new users to register with valid credentials', async () => {
    await request(server).post('/user/register')
      .send(validRegistration)
      .expect(200);
  });

  it('should allow users with the correct login information to authenticate', async () => {
    await request(server).post('/user/login')
      .send(Object.assign({}, { email: seedUser.email, password: seedUser.password }))
      .expect(200);
  });

  // Remove saved user data from test database
  afterAll(() => User.remove({}));
});
