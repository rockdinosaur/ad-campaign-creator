const mongoose = require('mongoose');

before(done => {
  mongoose.connect('mongodb://localhost/shoelace_challenge_test',  { useNewUrlParser: true });
  mongoose.connection
    .once('open', () => done())
    .on('error', err => {
      console.warn('Warning', error);
    });
});

beforeEach(done => {
  const { templates, campaigns } = mongoose.connection.collections;
    campaigns.drop()
    .then(() => templates.drop())
    .then(() => done())
    .catch(() => done());
})
