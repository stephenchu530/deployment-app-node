'use strict';

const supertest = require('supertest');
const {app} = require('./lib/server.js');
const mock = supertest(app);

describe('server', () => {
    it('works', () => {
        return mock.get('/')
          .then( result => {
              expect(result.status).toBe(200);
          })
    });
});
