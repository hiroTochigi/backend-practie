import { expect, server, BASE_URL, NEXT_URL } from './setup';

describe('Index page test', () => {
  it('get base url', (done) => {
    server
      .get(`${BASE_URL}/`)
      .expect(200)
      .end((err, res) => {
        expect(res.status).to.equal(200);
        expect(res.body.message).to.equal(
          'Environment variable is coming accross'
        );
        done();
      });
  });
});

describe('Next page test', () => {
  it('get next url', (done) => {
    server
      .get(`${NEXT_URL}/`)
      .expect(200)
      .end((err, res) => {
        expect(res.status).to.equal(200);
        expect(res.body.message).to.equal(
          'Is it works?'
        );
        done();
      });
  });
});
