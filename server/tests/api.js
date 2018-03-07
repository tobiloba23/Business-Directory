// import chai from 'chai';
import supertest from 'supertest';

import app from '../app';

// const should = chai.should();
const server = supertest(app);

describe('/ unit test', () => {
  // #1 sholud return 404
  it('GET /random should return 404', () => {
    server
      .get('/api/v1/random')
      .expect('Content-type', /html/)
      .expect(404);
  });
});
